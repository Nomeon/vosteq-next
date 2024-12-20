import { FC } from "react";
import { Icon } from "@iconify/react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { StepDienstenProps } from "@/lib/definitions";

const defaultTitle = 'Wat levert het op?';

export default function WatLevertHetOp(props: {
  title?: string;
  omschrijving: string;
  steps: StepDienstenProps[];
}) {

  const title = props.title || defaultTitle;

  const StepCard: FC<StepDienstenProps> = ({ icon, title, description }) => (
    <div className="py-8 lg:w-72 text-center outline outline-1 outline-groen px-4 flex flex-col max-lg:h-full">
      <div className="flex items-center justify-center h-32">
        <Icon className='text-groen' icon={icon} width={60} height={60} />
      </div>
      <div className='flex flex-col h-full pt-6'>
        <h4 className="text-paars text-base lg:text-xl h-1/4 flex items-end justify-center">{title}</h4>
        <Separator className="bg-paars my-2" />
        <p className="text-diepgrijs font-aktiv-grotesk-extended grow">{description}</p>
      </div>
    </div>
  );

  return (
    <div className='lg:container'>
      <div className="container flex flex-col items-center lg:py-16 max-lg:pb-16">
        <h2 className="text-paars max-lg:text-xl text-left lg:text-center w-full">{title}</h2>
        <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>{props.omschrijving}</p>
        <div className="flex flex-row gap-4 py-12 max-lg:hidden lg:px-16 lg:pb-16">
          {props.steps.map((step, index) => (
            <StepCard key={index} icon={step.icon} title={step.title} description={step.description} />
          ))}
        </div>
        {/* Mobile Carousel */}
        <div className="w-full pt-4 lg:hidden">
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