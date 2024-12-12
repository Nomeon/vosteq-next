'use client'

import { useState } from 'react';
import { Link } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";
import { Icon } from '@iconify/react';
import * as m from "@/paraglide/messages.js";

const Popup = () => {
  // State to control the popup's visibility
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  // Function to close the popup
  const closePopup = () => setIsPopupVisible(false);

  return (
    <div>
      {isPopupVisible && (
        <div className="z-30 fixed right-0 top-1/3 w-44 bg-geel  text-paars group hover:bg-groen hover:text-wit transition-all duration-200 max-lg:hidden">
            <button onClick={closePopup} className="absolute top-0 right-0 p-2">
                <Icon icon='mdi:close' className='text-paars group-hover:text-wit'/>
            </button>
            <Link href='/contact' className='flex flex-col gap-2 p-6'>
              <p className="font-aktiv-grotesk-extended text-lg leading-5 font-bold">{m.patchy_plane_lark_breathe()}</p>
              <Separator className="bg-paars group-hover:bg-wit transition-all duration-200"/>
              <div className="font-aktiv-grotesk flex flex-row items-center pr-2">
                  <p className="w-full group-hover:underline">{m.knotty_gross_elk_aid()}</p>
              </div>
            </Link>
        </div>
      )}
    </div>
  );
}

export { Popup };