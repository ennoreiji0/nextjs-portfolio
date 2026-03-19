'use client';
import { useState,useEffect } from "react";
import Link from "next/link";
import GameMain from "./GameMain";
import rand from "@/components/dougu";

interface YoyakuProps{
  nowOdai:string[];
  gentenWords:number[];
  timeLimit:number;
}

const odaiArr:YoyakuProps[]=[
  {
    nowOdai:["お世話に", "なって", "おります。", "明日", "会議室に", "集合", "して", "下さい。"],
    gentenWords:[3,4,5],
    timeLimit:15
  },
  {
    nowOdai:["みなさん、","今日は","楽しみに","していた","遠足","ですね","雲一つない","快晴","なのは、","みなさんが","普段","まじめに","いい子で","過ごしている","おかげだと","思います。"],
    gentenWords:[1,4,7],
    timeLimit:25
  }
]

export default function Yoyaku(){
  const [nokoriOdai,setNokoriOdai]=useState([...odaiArr]);
  const [currentOdai,setCurrentOdai]=useState<YoyakuProps|null>(null)

  const startNextGame=()=>{
    const len=nokoriOdai.length;
    if(len===0){
      setCurrentOdai(null)
      return;
    }
    if(len===1){

    }
    const id=rand(0,nokoriOdai.length)
    
    setCurrentOdai(nokoriOdai[id])
    const nextNokoriOdai=nokoriOdai.filter((_,index)=>index!=id)
    setNokoriOdai(nextNokoriOdai)
  }

  return (
    <>
      {!currentOdai && <button onClick={startNextGame}>ゲームスタート</button>}
      <p><Link href="/">ポートフォリオのトップへ</Link></p>
      {currentOdai && <GameMain
        key={currentOdai.nowOdai.join(',')}
        {...currentOdai}
        onNext={startNextGame}
        isLast={nokoriOdai.length===0}
      />}
    </>
  )
}