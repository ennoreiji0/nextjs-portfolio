import { useState, useEffect } from "react";

export function useTimer(initialTime: number,endString: string,initialActive: boolean=true){
  const [time,setTime]=useState<number|string>(initialTime);
  const [timerActive,setTimerActive]=useState(initialActive);
  useEffect(()=>{
    let timer:NodeJS.Timeout|undefined;
    if(timerActive &&typeof time === 'number'&& time>0){
      timer=setInterval(()=>{
        setTime((prev)=>typeof prev==='number' ? prev-1 :prev);
      },1000)
    }else if(time===0){
      setTimerActive(false)
      setTime(endString)
    }
    return ()=>clearInterval(timer);//次のuseEffectの直前にclearIntervalする
  },[timerActive,time,endString])
  return {time,setTime,timerActive,setTimerActive}
}
