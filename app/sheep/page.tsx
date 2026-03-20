'use client';
import { useState, useEffect, useRef } from 'react'

import Settings from './Settings'
import GameMain from './GameMain'

interface GameConfig{
    time:number;
}


export default function Sheep(){
  const [gameConfig,setGameConfig]=useState<GameConfig | null> (null)
  return (
    <>
    {/*gameConfigに値が入ったら<GameMain/>を表示*/}
      {!gameConfig ? (
        <Settings onStart={(time:number)=>setGameConfig({time:time})}/>
      ):(
        <GameMain config={gameConfig} onFinish={(()=>{setGameConfig(null)})}/>
      )}
    
    </>
  )
}

