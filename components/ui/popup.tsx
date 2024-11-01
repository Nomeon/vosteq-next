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
        <div className="z-30 fixed right-0 top-1/3 w-40 bg-geel p-6 flex flex-col gap-2 text-paars group hover:bg-groen hover:text-wit transition-all duration-200 max-md:hidden">
            <button onClick={closePopup} className="absolute top-0 right-0 p-2">
                <Icon icon='mdi:close' className='text-paars group-hover:text-wit'/>
            </button>
            <p className="font-aktiv-grotesk-extended text-lg leading-5 font-bold">{m.patchy_plane_lark_breathe()}</p>
            <Separator className="bg-paars group-hover:bg-wit transition-all duration-200"/>
            <Link href='/contact' className="font-aktiv-grotesk flex flex-row items-center">
                <p className="w-2/3">{m.knotty_gross_elk_aid()}</p>
                <Icon icon='mdi:chevron-right' className='fly text-wit w-1/3 h-full hidden group-hover:inline'/>
            </Link>
        </div>
      )}
    </div>
  );
}

export { Popup };