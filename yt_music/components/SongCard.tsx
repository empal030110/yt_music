'use client'

import React from 'react'
import { TopSong } from '@/types'
import Image from 'next/image';
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from './elements/IconButton';

interface SongCardProps {
    song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
        <div className="w-[48px] h-[48px] relative">
            <Image src={song.imageSrc} alt={song.name} fill className="object-cover" />
            <section className="w-[48px] h-[48px] items-center justify-center absolute top-0 hidden group-hover:flex bg-black cursor-pointer">
                <FiPlayCircle size={20} />
            </section>
        </div>
        <div className="flex flex-row items-center gap-4">
            <div>
                {song.rank === song.prevRank ? <FaCircle size={10} /> : song.rank > song.prevRank ? < AiOutlineCaretUp size={10} color="#3ca63f" /> : <AiOutlineCaretDown size={10} color="#ff0000" />}
            </div>
            <div>{song.rank + 1}</div>
        </div>
        <div>
            <div>{song.name}</div>
        </div>
        <section className="w-1/2 absolute top-0 right-0 flex-row justify-end items-center h-[48px] hidden group-hover:flex bg-[rgba(0,0,0,0.7)]">
            <IconButton icon={<FiThumbsDown size={20} />} />
            <IconButton icon={<FiThumbsUp size={20} />} />
            <IconButton icon={<FiMoreVertical size={20} />} />
        </section>
    </article>
  )
}

export default SongCard