import React from 'react'
import { TopSong } from '@/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { chunkArray } from '@/lib/utils';
import SongCard from './SongCard';

interface SongListCarouselProps {
    title?: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList:TopSong[] }) => {
    return (
        <div className="flex flex-col gap-4">
            {songList.map((song, idx) => {
                return <SongCard key={idx} song={song} />;
            })}
        </div>
    )
}

const SongListCarousel:React.FC<SongListCarouselProps> = ({ title, subTitle, Thumbnail, songListTop10 }) => {
    const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

    return (
        <div className="w-full">
             <Carousel>
                <div className="flex flex-row items-end justify-between my-2">
                    <article className="flex flex-row gap-3">
                        {Thumbnail}
                        <div className="flex flex-col justify-center">
                            {subTitle && <div className="text-neutral-500">{subTitle}</div>}
                            <div className="text-[34px] font-blod leading-[34px]">{title}</div>
                        </div>
                    </article>
                    <div className="relative left-[-45px]">
                        <div className="absolute bottom-[20px]">
                            <CarouselPrevious className="right-2" />
                            <CarouselNext className="left-2" />
                        </div>
                    </div>
                </div>
                <CarouselContent className="mt-4">
                    {chunkedTop10SongList?.map((songlist, index) => {
                        return (
                        <CarouselItem key={index} className="xl:basis-1/3">
                            <SongColumn songList={songlist} />
                        </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default SongListCarousel