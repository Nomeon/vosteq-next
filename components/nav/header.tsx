import Image from 'next/image'
import { Icon } from '@iconify/react';
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <header className='flex flex-row h-24 justify-between'>
      <div className='p-5 flex flex-row items-center gap-6'>
        <Image src='/vosteq-logo.svg' width={134} height={24} alt='logo' />
        <p className="font-aktiv-grotesk-extended text-paars font-semibold">de veranderexperts</p>
      </div>
      <NavigationMenu className='font-aktiv-grotesk text-paars'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
            <NavigationMenuContent className='flex flex-col p-6'>
                <NavigationMenuLink href='/diensten/veranderen'>Veranderen</NavigationMenuLink>
                <Separator />
                <NavigationMenuLink href='/diensten/verbeteren'>Verbeteren</NavigationMenuLink>
                <Separator />
                <NavigationMenuLink href='/diensten/verbinden'>Verbinden</NavigationMenuLink>
                <Separator />
                <NavigationMenuLink href='/diensten/versterken'>Versterken</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Veranderexperts</NavigationMenuTrigger>
            <NavigationMenuContent className=''>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Voor wie</NavigationMenuTrigger>
            <NavigationMenuContent>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Kennis en inspiratie</NavigationMenuTrigger>
            <NavigationMenuContent>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Over Vosteq</NavigationMenuTrigger>
            <NavigationMenuContent>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button className='group bg-groen w-40 hover:bg-donkergroen duration-200'>
        <p className='text-wit font-aktiv-grotesk duration-200 group-hover:scale-105'>Contact</p>
      </button>
    </header>
  )
}

export { Header }