'use client';
import { useState,useEffect } from "react";
import { useTimer } from "../../../components/useTimer";
import BackToTop from "@/components/BackToTop";
import NormalButton from "@/components/NormalButton";

interface ScoreData{
  genten1:number;
  genten2:number;
  time:number
}

interface YoyakuProps{
  nowOdai:string[];
  gentenWords:number[];
  timeLimit:number;
  onNext:()=>void;
  isLast:boolean
}

export default function GameMain({nowOdai,gentenWords,timeLimit,onNext,isLast}:YoyakuProps){
  /*const textArray :string[] = ["お世話", "に", "なっ", "て", "おり", "ます。", "明日", "広場", "に", "集合", "し", "て", "下さい。"];
  const Words :number[]=[6,7,9]*/
  //const [nowOdai,setNowOdai]=useState<string[]>(textArray)
  //const [gentenWords,setGentenWords]=useState<number[]>(Words)
  const [isDeleted,setIsDeleted]=useState<boolean[]>(new Array(nowOdai.length).fill(false))
  const [isMouseDown,setIsMouseDown]=useState<boolean>(false)
  const [message,setMessage]=useState<string>("")
  const [stop,setStop]=useState<boolean>(true)
  const countTimer=useTimer(3,'GO!')
  const gameTimer=useTimer(timeLimit,'終了',false);
  const [finished,setFinished]=useState<boolean>(false)
  //const [score,setScore]=useState<string>('')
  const [scoreData,setScoreData]=useState<ScoreData | null>(null)

  //const [toTop,setToTop]=useState('Shiftキーを押しながらなぞると単語が復活します')


  useEffect(()=>{//countTimer(3,2,1,GO!)が終了したら
    if(countTimer.time==='GO!'){
      gameTimer.setTimerActive(true);
      
      setTimeout(()=>{
        setStop(false)
        countTimer.setTime('')
      },1000)
    }
  },[countTimer.time])

  useEffect(()=>{
    if(gameTimer.time=='終了'){
      hantei()
    }
  },[gameTimer.time])

  function teisei(index: number,shift: boolean){
    setIsDeleted(prevIsDeleted=>
      prevIsDeleted.map((item,i)=>(i===index? shift:item))
    )
  }

  function hantei(){
    if(finished) return;//すでにゲームが終わってたら何もしない

    setFinished(true)
    setStop(true)
    let rawTime: number | string = gameTimer.time;
    let time: number = (rawTime === '終了') ? 0 : Number(rawTime);
    
    gameTimer.setTime('終了')

    let gentenCount1 :number=0;
    let gentenCount2 :number=0
    for(let i=0;i<nowOdai.length;i++){
      if(gentenWords.includes(i)){//消しちゃダメな単語を
        if(isDeleted[i]){//消しちゃったとき
          gentenCount1++;
        }
        
      }else if(!isDeleted[i]){//消して良い単語を残しておいたとき
        gentenCount2++;
      }
    }
    const memo=80-gentenCount1*8-gentenCount2*6+time
    setMessage(`あなたのAI度は${memo}点`)
    
    setScoreData({
      genten1:gentenCount1,
      genten2:gentenCount2,
      time:time
    })
  }

  return (
    <div className="text-2xl">
    <div
      style={{userSelect:'none' , cursor:'default'}}
      onMouseDown={()=>{
        setIsMouseDown(true)}}
      onMouseUp={()=>{setIsMouseDown(false)}}
      onMouseLeave={()=>{setIsMouseDown(false)}}
    >
      {nowOdai.map((word, index) => {
        return (
            <span key={index} 
            onMouseEnter={(e)=>{
              if(isMouseDown && !stop){
                teisei(index,!e.shiftKey)
              }
            }}
            onMouseDown={(e)=>{
                if(!stop){
                  teisei(index,!e.shiftKey)
                }
              }}
            className={`${isDeleted[index] ? "relative inline-block text-[#0f0f0f] line-through" : 'relative inline-block text-[#000000]' }`} >
              {word}
            </span>
        );
      })} 

    </div>
    <div>
      <p>{countTimer.time}</p>
      <p className="py-10">残り時間:{gameTimer.time}</p>
    </div>
    <div>
      <p>{message}</p>
      {scoreData &&
        <div>
          
          <p>消してはいけない単語を消した数・・・{scoreData.genten1}個</p>
          <p>消していい単語を残した数　　　・・・{scoreData.genten2}個</p>
          <p>残した時間　　　　　　　　　　・・・{scoreData.time}秒</p>  
      
        </div>  
      }
      
      <div className="h-15"></div>
      <NormalButton onClick={()=>hantei()} disabled={stop}>送信</NormalButton>
      <NormalButton onClick={()=>{
        setIsDeleted(new Array(nowOdai.length).fill(false))
      }}
      disabled={stop}
      >最初の状態に戻す</NormalButton>
      <p>Shiftキーを押しながらなぞると単語が復活します</p>
      {finished && (
      <div>
        <NormalButton onClick={onNext}>{isLast? 'タイトルに戻る':'次の問題へ進む'} </NormalButton>
        <BackToTop/>
      </div>
      )}
    </div>
    </div>
  )
}