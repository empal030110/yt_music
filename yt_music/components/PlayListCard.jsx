'use client'

import Image from 'next/image';
import React from 'react'
import { getRandomElementFromArray } from '@/lib/utils';
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from './elements/IconButton';

const PlayListCard = ({ playlist = {} } = {}) => {
    const { push } = useRouter();
    const { id, owner = "", playlistName = "", songList = [] } = playlist ?? {};
    const songListLen = songList.length;
    const imgSrc = getRandomElementFromArray(songList)?.imageSrc;

    const onClickCard = () => {
        if (id) {
            push(`/playlist?list=${id}`);
        }
    }

    const onClickPlay = () => {
        // todo. play
    }

    return (
        <article className="h-[240px] cursor-pointer group">
            <section className="relative h-[136px]" onClick={onClickCard}>
                <Image src={imgSrc || "https://images.unsplash.com/photo-1707833558984-3293e794031c"} fill={true} alt='thumbnail' className="object-cover rounded-md" />
                <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
                    <div className="absolute top-2 right-4">
                        <IconButton icon={<MdMoreVert size={20} />}></IconButton>
                    </div>
                    <div onClick={onClickPlay} className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-[2px]">
                        <FiPlay size={22} color="red" />
                    </div>
                </div>
            </section>
            <section className="mt-2">
                <div>{playlistName}</div>
                <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
            </section>
        </article>
    )
}

export default PlayListCard