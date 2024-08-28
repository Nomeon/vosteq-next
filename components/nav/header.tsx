'use client'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className='bg-inherit flex flex-row h-24 justify-between w-full sticky top-0 z-10'>
      <div className='flex flex-row items-center gap-4 md:gap-6 max-md:w-full max-md:container z-20'>
        <Image className='h-4 md:h-6 w-auto md:pl-8' src='/vosteq-logo.svg' width={134} height={24} alt='logo' />
        <p className="font-aktiv-grotesk-extended text-paars font-semibold max-md:text-xs">de veranderexperts</p>
        <button className='md:hidden bg-transparent w-8 h-8 ml-auto' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div id="menu-toggle" className={`${isMenuOpen ? 'toggled' : ''}`}>
            <div id="icon" className={`relative h-[0.2rem] w-[1.8rem] transition-all duration-200 before:bg-paars after:bg-paars bg-paars ${isMenuOpen ? 'bg-transparent  after:rotate-45 before:-rotate-45' : ''}`}/>
          </div>
        </button>
      </div>
      {/* Desktop Menu */}
      <NavigationMenu className='font-aktiv-grotesk text-paars max-md:hidden'>
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
      <button className='group bg-groen w-40 hover:bg-donkergroen duration-200 max-md:hidden'>
        <p className='text-wit font-aktiv-grotesk duration-200 group-hover:scale-105'>Contact</p>
      </button>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'open' : ''} absolute menu h-dvh w-full bg-wit pt-24 flex flex-col justify-between duration-500 transition-all`}>
        <Accordion type='single' collapsible className='container text-paars'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-base'>Diensten</AccordionTrigger>
            <AccordionContent>
              <p>Dit is een test</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-base'>Veranderexperts</AccordionTrigger>
            <AccordionContent>
              <p>Dit is een test</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-base'>Voor wie</AccordionTrigger>
            <AccordionContent>
              <p>Dit is een test</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='text-base'>Kennis en inspiratie</AccordionTrigger>
            <AccordionContent>
              <p>Dit is een test</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger className='text-base'>Over Vosteq</AccordionTrigger>
            <AccordionContent>
              <p>Dit is een test</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='h-24 bg-groen flex flex-row items-center container'>
            <Link href='/' className='font-aktiv-grotesk text-wit font-bold w-1/3 flex justify-start'>
              Contact
            </Link>
            <button className='h-10 w-1/3 flex justify-center'>
              <Icon icon='mdi:location-outline' className='text-wit w-10 h-10' />
            </button>
            <button className='w-1/3 h-10 flex justify-end'>
              <Icon icon='mdi:phone-outline' className='text-wit w-10 h-10' />
            </button>
        </div>
      </div>
    </header>
  )
}

export { Header }