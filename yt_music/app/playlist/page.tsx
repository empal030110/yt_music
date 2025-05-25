import HeaderBgChanger from "@/components/HeaderBgChanger";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface PlaylistPageProps {
    searchParams: {
        list:string;
    }
};

const page = async (props: PlaylistPageProps) => {
    const playlst = await getPlaylistById(Number(props.searchParams.list));
    if (!playlst) permanentRedirect("/");

    const imageSrc = getRandomElementFromArray(playlst.songList)?.imageSrc;

    return (
        <div>
            <HeaderBgChanger imageSrc={imageSrc} />
            playList {props.searchParams.list}
        </div>
    )
}

export default page;