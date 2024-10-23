'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NotFoundComponent = () => {
  const pathname = usePathname()
  return (
    <div className='w-full h-[calc(100dvh-23rem)] container flex flex-col gap-8 items-center justify-center'>
      <h1 className='text-paars text-4xl'>404</h1>
      <p className='text-diepgrijs text-center'>De pagina op <b>{pathname}</b> kon helaas niet gevonden worden...</p>
      <button className='btn-solid'><Link href={'/'}>Terug naar home</Link></button>
    </div>
  )
};

export { NotFoundComponent };