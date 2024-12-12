export default function DecoLeft(props: {
    imageSrc: string;
  }) {
    return (
      <div className="relative sm:w-full md:w-2/3 lg:w-full aspect-[18/21]">
        <div
          className="absolute left-0 right-[20.42%] top-0 bottom-[0.27%] bg-gradient-to-r from-[#6ABEC0] to-[#88268E]"
        />
        <div
          className="absolute left-[4.64%] right-[13.66%] top-[8.35%] bottom-[13.62%] bg-cover bg-center"
          style={{ backgroundImage: `url(${props.imageSrc})` }}
        />
        <div
          className="absolute left-[17%] right-[9%] top-[22%] bottom-[15%] border-8 border-white rotate-[-45deg]"
        />
      </div>
    );
  }
  

  