'use client'

import React from 'react'
import { Song } from '@/types'
import Image from 'next/image';
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from './elements/IconButton';
import { useRouter } from 'next/navigation';
import usePlayerState from '@/hooks/usePlayerState';

interface SongCardRowExpandProps {
    song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
    const { channel, channelId } = song;

    const { push } = useRouter();
    const onclickChannel = () => {
        push(`/channel/${channelId}`);
    }

    const { addSongList } = usePlayerState();
    const onclickPlay = () => {
        addSongList([song]);
    }

    return (
        <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
            <div className="w-[48px] h-[48px] relative">
                <Image src={song.imageSrc} alt={song.name} fill className="object-cover" />
                <section className="w-[48px] h-[48px] items-center justify-center absolute top-0 hidden group-hover:flex bg-black cursor-pointer" onClick={onclickPlay}>
                    <FiPlayCircle size={20} />
                </section>
            </div>
            <div className="flex flex-row gap-4 justify-between basis-1/3">
                <div className="w-[130px] truncate">{song.name}</div>
                <div className="text-neutral-500 hover:underline cursor-pointer" onClick={onclickChannel}>{channel}</div>
            </div>
            <section className="absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-[120px] hidden group-hover:flex bg-[rgba(0,0,0,0.7)]">
                <IconButton icon={<FiThumbsDown size={20} />} />
                <IconButton icon={<FiThumbsUp size={20} />} />
                <IconButton icon={<FiMoreVertical size={20} />} />
            </section>
        </article>
    )
}

export default SongCardRowExpand