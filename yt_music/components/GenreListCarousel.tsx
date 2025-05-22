import React from 'react'
import { TopSong } from '@/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { chunkArray } from '@/lib/utils';
import GenreCard from './GenreCard';

interface GenreListCarouselProps {
    title?: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    genreList: string[];
}

const GenreColumn = ({ genreList = [] }: { genreList:string[] }) => {
    return (
        <div className="flex flex-col gap-4">
            {genreList.map((genre) => {
                return <GenreCard genre={genre} key={genre} />;
            })}
        </div>
    )
}

const GenreListCarousel:React.FC<GenreListCarouselProps> = ({ title, subTitle, Thumbnail, genreList }) => {
    const chunkedGenreList = chunkArray(genreList, 4) as string[][];

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
                    {chunkedGenreList?.map((genreList, index) => {
                        return (
                        <CarouselItem key={index} className="basis-1/3 xl:basis-1/5">
                            <GenreColumn genreList={genreList} />
                        </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default GenreListCarousel