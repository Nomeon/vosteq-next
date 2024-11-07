import { FC } from "react";
import { Icon } from "@iconify/react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { StepDienstenProps } from "@/lib/definitions";

export default function WatLevertHetOp(props: {
  omschrijving: string;
  steps: StepDienstenProps[];
}) {
  const StepCard: FC<StepDienstenProps> = ({ icon, title, description }) => (
    <div className="py-8 md:w-72 text-center outline outline-1 outline-groen px-4 flex flex-col max-md:h-full">
      <div className="flex items-center justify-center h-32">
        <Icon className='text-groen' icon={icon} width={60} height={60} />
      </div>
      <div className='flex flex-col'>
        <h4 className="text-paars text-base md:text-xl flex-none">{title}</h4>
        <Separator className="bg-paars my-2 flex-none" />
        <p className="text-diepgrijs font-aktiv-grotesk-extended grow">{description}</p>
      </div>
    </div>
  );

  return (
    <div className='md:container'>
      <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
        <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
        <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Dankzij onze inside-out benadering realiseren we:</p>
        <div className="flex flex-row gap-4 py-12 max-md:hidden md:px-16 md:pb-16">
          {props.steps.map((step, index) => (
            <StepCard key={index} icon={step.icon} title={step.title} description={step.description} />
          ))}
        </div>
        {/* Mobile Carousel */}
        <div className="w-full pt-4 md:hidden">
          <Carousel className="py-4">
            <CarouselContent>
              {props.steps.map((step, index) => (
                <CarouselItem key={index} className="basis-2/3 flex items-center">
                  <div className="w-full h-full p-1">
                    <StepCard icon={step.icon} title={step.title} description={step.description} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { WatLevertHetOp };