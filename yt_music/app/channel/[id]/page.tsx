import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import PlayListCarousel from "@/components/PlayListCarousel";
import ChannelHead from "../components/ChannelHead";

interface ChannelPageProps {
    params: {
        id: string;
    }
}

const page = async (props: ChannelPageProps) => {
    const channel = await getChannelById(Number(props.params.id));
    if (!channel) permanentRedirect("/");

    const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

    return (
        <PagePadding>
            <HeaderBgChanger imageSrc={imageSrc}/>
            <div className="mt-[150px]"></div>
            <ChannelHead channel={channel} />
            <section className="mt-[80px]">
                <div className="text-[28px] font-bold">노래</div>
                <div className=",t-[20px]">
                    <ul className="flex  flex-col gap-4">
                        {channel.songList.map(( song, key ) => {
                            return <SongCardRowExpand song={song} key={key} />
                        })}
                    </ul>
                </div>
            </section>
            <section className="mt-[80px]">
                <div className="text-[28px] font-bold">앨범</div>
                <PlayListCarousel playlistArray={channel.playlistArray} />
            </section>
            <section className="mt-[80px]"></section>
        </PagePadding>
    )
}

export default page;