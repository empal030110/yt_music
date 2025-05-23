'use client'

import { React, useState, useEffect, useRef } from 'react';
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from  "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "@/components/elements/Logo";
import Navigator from '@/components/elements/Navigator';
import { cn } from "@/lib/utils";
import useUISate from "@/hooks/useUIState";

const HeaderDrawer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerTitle className='sr-only'></DrawerTitle>
            <DrawerDescription className='sr-only'></DrawerDescription>
            <DrawerContent className='w-[240px] h-full'>
                <div className='py-3'>
                    <div className='px-3'>
                        <Logo isInDrawer onClickClose={() => {setIsOpen(false)}} />
                    </div>
                    <Navigator />
                </div>
            </DrawerContent>
        </Drawer>
    )
}  

const Header = ({ children }) => {
    const { headerImageSrc } = useUISate();
    
    const [isScrolled, setIsScrolled] = useState(false);
    const headRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = headRef?.current?.scrollTop;
            setIsScrolled(scrollValue !== 0);
        };

        headRef?.current?.addEventListener("scroll", handleScroll);
        return () => {
            headRef?.current?.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className='relative overflow-y-auto w-full h-full' ref={headRef}>
            <section className='absolute top-0 w-full'>
                <div className='relative h-[400px] w-full'>
                    <Image src={headerImageSrc || "https://images.unsplash.com/photo-1707833558984-3293e794031c"} alt='mediaItem' className='object-cover' fill />
                    <div className='absolute top-0 bg-black opacity-40 w-full h-[400px]'></div>
                    <div className='absolute top-0 bg-gradient-to-t from-black w-full h-[400px]'></div>
                </div>
            </section>
            <section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
                <PagePadding>
                    <div className='h-[64px] flex flex-row justify-between items-center'>
                        <article className='hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.7)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500'>
                            <div><FiSearch size={24} /></div>
                            <input type="" className='w-full h-full bg-transparent' placeholder='노래, 앨범, 아티스트, 팟캐스트 검색' />
                        </article>
                        <HeaderDrawer>
                            <article className='lg:hidden'>
                                <Logo />
                            </article>
                        </HeaderDrawer>
                        <article className='flex flex-row gap-6 items-center'>
                            <FaChromecast size={26} />
                            <UserIcon />
                        </article>
                    </div>
                </PagePadding>
            </section>
            <section className='relative'>{children}</section>
        </header>
    )
}

export default Header;