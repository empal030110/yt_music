'use client'

import React from 'react'
import userPlayerState from "@/hooks/usePlayerState";
import PlayerContents from './PlayerContents';

const PlayerWrapper = () => {
    const { isVisiblePlayer } = userPlayerState();
    if (!isVisiblePlayer) return null;

    return (
        <div className="fixed bottom-0 h-[80px] w-full bg-neutral-900">
            <PlayerContents />
        </div>
  )
}

export default PlayerWrapper