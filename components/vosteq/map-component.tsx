'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L, { LatLngTuple} from 'leaflet'

const position: LatLngTuple = [52.338306, 6.684023]
const customIcon = L.divIcon({
  className: 'custom-icon',
  html: `<div class='w-10 h-10 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class='w-full h-full' viewBox="0 0 24 24">
            <path fill="#88268E" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/>
          </svg>
        </div>`,
  iconAnchor: [20, 38],
  popupAnchor: [0, -20],
})

const ForceResize = () => {
  const map = useMap()
  
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 0)
  }, [map])

  return null
}

const MapComponent = () => {
  return (
    <div className='h-96 w-full relative'>
      <MapContainer center={position} zoom={13} className='w-full h-full'>
        <ForceResize />
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="flex flex-col">
              <p className="font-bold text-center text-paars font-aktiv-grotesk-extended">Vosteq</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Vosteq+Innovations+B.V.,+Edisonstraat+11,+7601+PS+Almelo,+Nederland"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-paars font-aptos underline text-center"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent;