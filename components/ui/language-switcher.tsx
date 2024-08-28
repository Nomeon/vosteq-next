'use client'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { availableLanguageTags } from "@/paraglide/runtime";
import { usePathname, useRouter } from "@/lib/i18n";

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const labels = { en: "gb", nl: "nl" };

    const handleLocaleChange = (locale: any) => {
        router.push(pathname, { locale });
        setIsOpen(false);  // Close the dropdown after selection
    };

    return (
        <div className="relative flex">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
              <Icon className='w-4 h-4' icon="material-symbols:language" />
            </button>
            {isOpen && (
                <div className="absolute top-full -left-3 mt-2 bg-white shadow-lg">
                    {availableLanguageTags.map(lang => (
                        <div
                            key={lang}
                            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleLocaleChange(lang)}
                        >
                            <Icon icon={`flag:${labels[lang]}-4x3`} className="w-6 h-6"/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export { LanguageSwitcher };
