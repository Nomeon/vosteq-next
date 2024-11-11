export default function DecoRight(props: {
    imageSrc: string;
}) {
    return (
      <div className="relative w-full aspect-[18/21]">
        <div
            className="absolute left-[7.1%] right-[9.33%] top-0 bottom-0 bg-gradient-to-r from-[#6ABEC0] to-[#88268E]"
        />
        <div
            className="absolute z-20 left-[9.89%] right-0 top-[10.03%] bottom-[10.88%] border-8 border-white rounded-full"
        />
        <div
            className="absolute left-0 right-[14.2%] top-[3.73%] bottom-[18.03%] bg-cover bg-center"
            style={{ backgroundImage: `url(${props.imageSrc})` }}
        />
      </div>
    )
}