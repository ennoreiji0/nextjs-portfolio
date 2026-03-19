'use client';
import { useState } from "react";

interface SettingsProps{
  onStart:(time:number)=>void;
}
export default function Settings({onStart}: SettingsProps){
  const [time,setTime]=useState(60);
  return (
    <div>
      <h1>二進法で羊を数えるゲーム</h1>
      <div className="setting-time">
        <p>制限時間:{time}秒</p>
        <button onClick={()=>{setTime(30)}}>30秒</button>
        <button onClick={()=>{setTime(60)}}>60秒</button>
        <button onClick={()=>{setTime(100)}}>100秒</button>
      </div>
      <button onClick={()=>{onStart(time)}}>ゲーム開始！</button>
    </div>
  )
}