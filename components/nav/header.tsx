'use client'

import Image from 'next/image';
import { Link } from "@/lib/i18n";
import { usePathname } from "@/lib/i18n";
import { Icon } from '@iconify/react';
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
import { MenuSectionProps, AccordionSectionProps } from "@/lib/definitions";
import { useEffect, useState, FC } from 'react';

const menuData = [
  {
    title: 'Diensten',
    href: '/diensten',
    links: [
      { name: 'Directieadvies', href: '/diensten/directieadvies' },
      { name: 'Innovatie- en verandertrajecten', href: '/diensten/innovatie-en-verandertrajecten' },
      { name: 'Expertise on demand', href: '/diensten/expertise-on-demand' },
    ]
  },
  {
    title: 'Onze aanpak',
    href: '/onze-aanpak',
    links: [
      { name: 'Inzicht', href: '/onze-aanpak/inzicht' },
      { name: 'Strategisch plan', href: '/onze-aanpak/strategisch-plan' },
      { name: 'Inspiratie', href: '/onze-aanpak/inspiratie' },
      { name: 'Begeleiding', href: '/onze-aanpak/begeleiding' },
      { name: 'Resultaat', href: '/onze-aanpak/resultaat' },
    ]
  },
  {
    title: 'Klant cases',
    href: '/klant-cases',
    links: []
  },
  {
    title: 'Over Vosteq',
    href: '/over-vosteq',
    links: [
      { name: 'Visie en missie', href: '/over-vosteq/visie-en-missie' },
      { name: 'Waarden en normen', href: '/over-vosteq/waarden-en-normen' },
      { name: 'De veranderexperts', href: '/over-vosteq/de-veranderexperts' },
      { name: 'Werken bij Vosteq', href: '/over-vosteq/werken-bij-vosteq' },
      { name: 'MVO-beleid', href: '/over-vosteq/mvo-beleid' },
    ]
  }
]

const MenuSection: FC<MenuSectionProps> = ({ title, href, links }) => (
  links.length > 1 ? 
    <NavigationMenuItem>
      <NavigationMenuTrigger className="submenu-trigger text-base">
        { href? <Link href={href}>{title}</Link> : title }
      </NavigationMenuTrigger>
      <NavigationMenuContent className='flex flex-col p-6'> 
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} legacyBehavior passHref>
            <NavigationMenuLink className='w-auto pr-2 text-base whitespace-nowrap border-b text-paars border-paars hover:font-semibold hover:text-donkergroen hover:border-donkergroen'>
              {link.name}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  :
    <NavigationMenuItem>
      <Link href={href!} legacyBehavior passHref>
        <NavigationMenuLink className='w-auto pr-2 no-underline font-aktiv-grotesk text-base whitespace-nowrap text-paars font-medium hover:text-donkergroen hover:border-donkergroen'>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
);

const AccordionSection: FC<AccordionSectionProps> = ({ title, href, links }) => (
  links.length > 1 ?
    <AccordionItem value={title}>
      <AccordionTrigger className='font-aktiv-grotesk text-base data-[state=open]:text-donkergroen data-[state=open]:font-semibold'>
        <Link href={href!}>
          {title}
        </Link>
      </AccordionTrigger>
      <AccordionContent className='flex flex-col ml-8 gap-4 text-base'>
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} className='pb-2 border-b border-paars hover:text-donkergroen hover:border-donkergroen'>
            {link.name}
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  :
    <AccordionItem value={title} className='py-4 font-medium text-base font-aktiv-grotesk hover:text-donkergroen hover:font-semibold'>
      <Link href={href!} >
        {title}
      </Link>
    </AccordionItem>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]'
      )
      if (triggers.length === 0) return

      const firstTrigger = triggers[0] as HTMLElement
      const viewports = document.getElementsByClassName("submenu-viewport")

      if (viewports.length > 0) {
        const viewport = viewports[0] as HTMLElement
        viewport.style.left = `${firstTrigger.offsetLeft}px`
      }
    })
  }

  return (
    <header className='bg-white w-full flex sticky top-0 z-10'>
      <div className='flex flex-row lg:container h-24 w-full gap-4 box-border'>
        <div className='flex flex-row items-center gap-4 lg:gap-6 max-lg:w-full max-lg:container z-20'>
          <Link href='/'>
            <Image className='h-4 lg:h-6 w-auto lg:pl-8 inline-block' src='/vosteq-logo.svg' width={134} height={24} alt='logo' />
          </Link>
          <p className="font-aktiv-grotesk-extended text-paars font-semibold max-lg:text-sm md:inline lg:hidden xl:inline">de veranderexperts</p>
          <button className='lg:hidden bg-transparent w-8 h-8 ml-auto' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div id="menu-toggle" className={`${isMenuOpen ? 'toggled' : ''}`}>
              <div id="icon" className={`relative h-[0.2rem] w-[1.8rem] transition-all duration-200 before:bg-paars after:bg-paars bg-paars ${isMenuOpen ? 'bg-transparent after:rotate-45 before:-rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className='font-aktiv-grotesk text-paars max-lg:hidden ml-8' onValueChange={onNavChange}>
          <NavigationMenuList>
            {menuData.map((section, idx) => (
              <MenuSection key={idx} title={section.title} href={section.href} links={section.links} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'open' : ''} absolute menu h-dvh w-full bg-wit pt-24 flex flex-col justify-between duration-500 transition-all`}>
          <Accordion type='single' collapsible className='container text-paars'>
            {menuData.map((section, idx) => (
              <AccordionSection key={idx} title={section.title} href={section.href} links={section.links} />
            ))}
          </Accordion>
          <div className='h-24 bg-groen flex flex-row items-center container'>
            <Link href='/contact' className='font-aktiv-grotesk text-wit font-bold w-1/3 flex justify-start'>Contact</Link>
            {/* <button className='h-8 w-1/3 flex justify-center'> */}
            <Link href='https://www.google.com/maps/dir/?api=1&destination=Vosteq+Innovations+B.V.,+Edisonstraat+11,+7601+PS+Almelo,+Nederland' className='h-8 w-1/3 flex justify-center'>
              <Icon icon='mdi:location-outline' className='text-wit w-8 h-8' />
            </Link>
            {/* </button> */}
            <button className='w-1/3 h-8 flex justify-end'>
              <Icon icon='mdi:phone-outline' className='text-wit w-8 h-8' />
            </button>
          </div>
        </div>
      </div>
      <Link href='/contact' className='group flex ml-auto items-center justify-center bg-groen w-44 hover:bg-donkergroen duration-200 max-lg:hidden'>
        <p className='text-wit font-aktiv-grotesk duration-200 group-hover:scale-105'>Contact</p>
      </Link>
    </header>
  )
}

export { Header }