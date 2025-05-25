import WhitekButton from "@/components/elements/WhiteButton";
import BlackButton from "@/components/elements/BlackButton";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import { FiShuffle } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import React from "react";

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
            <section>
                <div className="text-[28px] font-bold">{channel.name}</div>
                <article className="mt-4 lg:hidden">
                    <div>
                        <BlackButton className={"w-[230px] flex justify-center"} label= {"구독중 4.10만"} />
                    </div>
                    <div className="flex flex-row gap-4 mt-4">
                        <WhitekButton label={"셔플"} icon={<FiShuffle size={16} />} />
                        <WhitekButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
                    </div>
                </article>
                <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
                    <WhitekButton label={"셔플"} icon={<FiShuffle size={16} />} />
                    <WhitekButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
                    <BlackButton className={"w-[230px] flex justify-center"} label= {"구독중 4.10만"} />
                </div>
            </section>
            <section>
                노래
            </section>
            <section>
                앨범
            </section>
        </PagePadding>
    )
}

export default page;