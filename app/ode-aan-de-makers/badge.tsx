"use client";

import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  useRopeJoint,
  useSphericalJoint,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";
import { useRef, useState, useEffect } from "react";
import {
  Center,
  Text3D,
  Lightformer,
  RenderTexture,
  useTexture,
  Environment,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import { Object3DNode, MaterialNode } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/images/badge/VosteqCard.glb");
useTexture.preload("/images/badge/band.jpg");

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}

export function Badge3D({ firstName, lastName, companyName}: {
  firstName: string;
  lastName: string;
  companyName: string;
}) {
  return (
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
        <ambientLight intensity={Math.PI} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band firstName={firstName} lastName={lastName} companyName={companyName}/>
        </Physics>
        <Environment background>
          <color attach="background" args={["white"]} />
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
  );
}

function Band({
  firstName,
  lastName,
  companyName,
}: {
  firstName: string;
  lastName: string;
  companyName: string;
}) {
  const band = useRef<THREE.Mesh<MeshLineGeometry>>(null),
    fixed = useRef<RapierRigidBody>(null),
    j1 = useRef<RapierRigidBody>(null),
    j2 = useRef<RapierRigidBody>(null),
    j3 = useRef<RapierRigidBody>(null),
    card = useRef<RapierRigidBody>(null);
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3(0, 0, 0);
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const { nodes, materials } = useGLTF("/images/badge/VosteqCard.glb");
  const texture = useTexture("/images/badge/band.jpg");
  const [dragged, drag] = useState<THREE.Vector3 | boolean>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (
      !band.current ||
      !card.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !fixed.current
    )
      return;

    if (dragged instanceof THREE.Vector3) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      // Calculate catmul curve
      curve.points[0].set(
        j3.current.translation().x,
        j3.current.translation().y,
        j3.current.translation().z
      );
      curve.points[1].set(
        j2.current.translation().x,
        j2.current.translation().y,
        j2.current.translation().z
      );
      curve.points[2].set(
        j1.current.translation().x,
        j1.current.translation().y,
        j1.current.translation().z
      );
      curve.points[3].set(
        fixed.current.translation().x,
        fixed.current.translation().y,
        fixed.current.translation().z
      );
      (band.current.geometry as MeshLineGeometry).setPoints(
        curve.getPoints(32)
      );
      // Tilt it back towards the screen
      ang.copy(
        new THREE.Vector3(
          card.current.angvel().x,
          card.current.angvel().y,
          card.current.angvel().z
        )
      );
      rot.set(
        card.current.rotation().x,
        card.current.rotation().y,
        card.current.rotation().z
      );
      card.current.setAngvel(
        {
          x: ang.x,
          y: ang.y - rot.y * 0.25,
          z: ang.z,
        },
        true
      );
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody
          ref={fixed}
          angularDamping={2}
          linearDamping={2}
          type="fixed"
        />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          angularDamping={2}
          linearDamping={2}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            position={[0, -1.2, -0.05]}
            scale={2.25}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              (e.target as HTMLElement).releasePointerCapture(e.pointerId),
              drag(false)
            )}
            onPointerDown={(e) => (
              (e.target as HTMLElement).setPointerCapture(e.pointerId),
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(
                    vec.copy(
                      card.current?.translation()
                        ? new THREE.Vector3(
                            card.current.translation().x,
                            card.current.translation().y,
                            card.current.translation().z
                          )
                        : new THREE.Vector3()
                    )
                  )
              )
            )}
          >
          <mesh geometry={(nodes.card as THREE.Mesh).geometry}>
            <meshStandardMaterial>
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault manual aspect={1.05} position={[0.49, 0.22, 2]} />
                <mesh>
                  <planeGeometry args={[0.98, -0.97 / (512/771)]} />
                  <meshBasicMaterial
                    map={useTexture('/images/badge/voorkant.png')}
                    side={THREE.BackSide}
                  />
                </mesh>
                <Center bottom right position={[-0.42, -0.5, 0]}>
                      <Text3D
                        bevelEnabled={false}
                        bevelSize={0}
                        font="/fonts/font.json"
                        height={0}
                        rotation={[0, Math.PI, Math.PI]}
                        scale={0.05}
                      >
                        {firstName}
                      </Text3D>
                      <Text3D
                        bevelEnabled={false}
                        bevelSize={0}
                        font="/fonts/font.json"
                        height={0}
                        rotation={[0, Math.PI, Math.PI]}
                        scale={0.05}
                        position={[0, 0.08, 0]}
                      >
                        {lastName}
                      </Text3D>
                </Center>
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
          <mesh geometry={(nodes.clip as THREE.Mesh).geometry} material={materials.metal} material-roughness={0.3} />
          <mesh geometry={(nodes.clamp as THREE.Mesh).geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={new THREE.Vector2(width, height)}
          useMap={1}
          map={texture}
          repeat={new THREE.Vector2(-3, 1)}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
