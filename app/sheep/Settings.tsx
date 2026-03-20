'use client';
import Header from "@/components/Header";
import NormalButton from "@/components/NormalButton";
import { useState } from "react";
import BackToTop from "@/components/BackToTop";

interface SettingsProps{
  onStart:(time:number)=>void;
}
export default function Settings({onStart}: SettingsProps){
  const [time,setTime]=useState(60);
  return (
    <div>
      <Header>二進法で羊を数えるゲーム</Header>
      <div className="text-xl space-y-5 pt-10">
        <p className="text-2xl pl-1">制限時間:{time}秒</p>
        <NormalButton onClick={()=>{setTime(30)}}>30秒</NormalButton>
        <NormalButton onClick={()=>{setTime(60)}}>60秒</NormalButton>
        <NormalButton onClick={()=>{setTime(100)}}>100秒</NormalButton>
        <p></p>
        <NormalButton onClick={()=>{onStart(time)}}>ゲーム開始！</NormalButton>
      </div>
      <BackToTop/>
      
    </div>
  )
}