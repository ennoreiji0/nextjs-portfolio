'use client';
import Header from "@/components/Header";
import NormalButton from "@/components/NormalButton";
import { useState } from "react";
import ToGameHome from "@/components/ToGameHome";

interface SettingsProps{
  onStart:(playerName:string)=>void;
}
export default function Settings({onStart}: SettingsProps){
  const [playerName,setPlayerName]=useState<string>('')
  return (
    <div>
      <Header>二進法で羊を数えるゲーム</Header>
      <div className="text-xl space-y-5 pt-10">
        <p className="text-2xl pl-1">名前を入力:
          <input 
            type="text" 
            value={playerName} 
            onChange={(e)=>setPlayerName(e.target.value)} 
            className="text-black bg-[#f0f0f0]" /></p>
        <p></p>
        <NormalButton onClick={()=>{onStart(playerName) /*押すと、親のgameConfigを書き換えるのでゲームが始まる */}}>
          ゲーム開始！
        </NormalButton>
      </div>
      <ToGameHome/>
      
    </div>
  )
}