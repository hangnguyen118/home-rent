'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/theme/theme';

export default function Header() {
    const pathname = usePathname();
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`w-full bg-white flex justify-between px-10 py-2 border-b md:px-8 lg:px-24 border-primaryContainer fixed z-50 ${isSticky? 'shadow-2xl shadow-primaryContainer' : ''}`}>
            <Link href='/'>
                <Image src="/images/logo.png" width={32} height={32} alt='LOGO' />
            </Link>
            <div className='xl:flex lg:flex hidden flex-row items-center'>
                {
                    navigation.map((item, index) => (
                        <Link key={index} href={item.href} className={`ml-5 font-bold hover:text-primary p-1.5 ${pathname === item.href ? 'text-primary' : ''}`} >{item.name}</Link>
                    ))
                }
            </div>
            <div className='hidden md:flex xl:flex lg:flex'>
                <button type="button" className="bg-primaryContainer text-primary ml-1 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white border border-white hover:border-primaryContainer">
                    Login
                </button>
                <button type="button" className="bg-primaryContainer text-primary ml-1 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white border border-white hover:border-primaryContainer">
                    Register
                </button>
            </div>
            <button type="button" className="md:hidden lg:hidden xl:hidden">
                    <Image src='/menu.png' width={30} height={30} alt='MENU_ICON'/>
            </button>
        </div>
    )
}
