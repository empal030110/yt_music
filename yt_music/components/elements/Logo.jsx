'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import IconButton from "@/components/elements/IconButton";

const Logo = ({ isInDrawer = false, onClickClose =() => {} }) => {
    const { push } = useRouter();
    const onClickLogo = () => {
        push("/");
    }

    const onClickMenu = () => {};

    return (
        <section className="flex flex-row items-center gap-3">
            {isInDrawer ? (
            <IconButton 
                icon={<IoClose size={30} />}
                onClickIcon = { onClickClose }
            />
            ) : (
            <IconButton 
                 icon={<RxHamburgerMenu size={24} />}
                onClickIcon = { onClickMenu }
            />
            )}
            <div className="cursor-pointer" onClick={onClickLogo}>
                <Image src={"/main-logo.svg"} width={100} height={30} alt="logo" />
            </div>
        </section>
    )
}

export default Logo;