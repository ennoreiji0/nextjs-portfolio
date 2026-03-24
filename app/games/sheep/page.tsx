'use client';
import { useState, useEffect, useRef } from 'react'

import Settings from './Settings'
import GameMain from './GameMain'

interface GameConfig{
    playerName:string;
}


export default function Sheep(){
  const [gameConfig,setGameConfig]=useState<GameConfig | null> (null)
  return (
    <>
    {/*gameConfigに値が入ったら<GameMain/>を表示*/}
      {!gameConfig ? (
        <Settings 
          onStart={
            (playerName:string)=>setGameConfig({playerName:playerName})//始めるためにはgameConfigに値を入れる必要があるので関数を渡しておく
          }/>
      ):(
        <GameMain config={gameConfig} onFinish={(()=>{setGameConfig(null)})}/>
      )}
    
    </>
  )
}

