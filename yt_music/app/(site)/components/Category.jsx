'use client'

import React, { ReactNode } from "react";
import useUISate from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

const Category = () => {

    const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUISate();

    const onClickCategory = (item) => {
        if (homeCategory === item.label) {
            setHeaderImageSrc("");
            setHomeCategory("");
        } else {
            setHeaderImageSrc(item.src);
            setHomeCategory(item.label);
        }
    }

    return (
        <div className="w-full overflow-x-hidden">
            <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
                {homeCategoryList.map(item => {
                    return <li key={item.label} onClick={() => onClickCategory(item)} className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] cursor-pointer hover:bg-[rgba(144,144,144,0.45)]", item.label === homeCategory && "bg-white text-black hover:bg-white")}>{item.label}</li>
                })}
            </ul>
        </div>
    )
}

export default Category;