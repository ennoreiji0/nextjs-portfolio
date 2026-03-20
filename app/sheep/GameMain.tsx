'use client';
import { useState, useEffect } from "react";
import {useTimer} from '../../components/useTimer'
import BackToTop from "@/components/BackToTop";
import NormalButton from "@/components/NormalButton";

interface GameMainProps{
  config:{
    time: number;
  };
  onFinish: ()=>void;
}

export default function GameMain({config,onFinish} :GameMainProps){
  const [buttons,setButtons]=useState<number[]>([0,0,0,0,0,0,0])
  const bitWeights=[64, 32, 16, 8, 4, 2, 1]
  const [odai,setOdai]=useState<number>(1);//羊が今、何匹か
  const [message,setMessage]=useState<string>('')//メッセージ
  const [stop,setStop]=useState<boolean>(true);//プレイヤーにボタンを押してほしくないときはtrue
  //const [toTop,setToTop]=useState("")//クリア後に「トップへ」という文字を入れる。ポートフォリオのトップへ行く。
  const [finished,setFinished]=useState<boolean>(false);

  const countTimer=useTimer(3,'GO!')
  const gameTimer=useTimer(config.time,'終了',false);

  useEffect(()=>{//countTimer(3,2,1,GO!)が終了したら
    if(countTimer.time==='GO!'){
      gameTimer.setTimerActive(true);
      
      setTimeout(()=>{
        setStop(false);
        countTimer.setTime('')
      },1000)
    }
  },[countTimer.time])

  useEffect(()=>{//プレイ時間が終了したら
    if(gameTimer.time=='終了'){
      setStop(true);
      setMessage("得点は"+(odai-1)+"点")
      setFinished(true);
    }
  },[gameTimer.time])

  const hantei=(button: number[])=>{
    let count=0;
    for(let i=0;i<button.length;i++){//ボタンが表す数を計算する
      count+=button[i]*bitWeights[i]
    }
    if(count==odai){//正解したら
      setStop(true)
      setMessage('正解！')
      setTimeout(()=>{//次の問題の準備
        setButtons([0,0,0,0,0,0,0])
        const newOdai=odai+1
        setOdai(newOdai)
        setStop(false);
      },300)
      setTimeout(()=>{
        setMessage('');
        
      },700)
    }
    
  }

  const hantenButton=(index: number)=>{//index番目の0と1を切り替える
    const newButtons=[...buttons];
    newButtons[index]=newButtons[index]===0?1:0;
    setButtons(newButtons);
    hantei(newButtons)
  }

  return(
    <>
      <div className="text-2xl space-y-5">
      {buttons.map((btn,index)=>{
        return <button key={index} className='w-[50px] h-[50px] border border-[#333] rounded-[4px] px-2 py-1 leading-6 bg-[#3333aa] text-[#ffffff] disabled:bg-[#000000]' onClick={()=>hantenButton(index)} disabled={stop}>{btn}</button>
      })}
      <p>{countTimer.time}</p>
      <p>残り時間:{gameTimer.time}</p>
      
      {!finished &&(
        <p className='bokujo'>
          {'羊'.repeat(odai)/*odai個だけ羊という字を書いておく */}
        </p>
      )

      }
      
      <p className="text-[#c60303] font-bold">{message}</p>
      {finished && (
        <div>
          <NormalButton onClick={onFinish}>ゲーム設定画面へ</NormalButton>
          <BackToTop/>
        </div>
      )}
      </div>
    </>
  )
}