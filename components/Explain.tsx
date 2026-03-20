'use client';

import { ReactNode, useState } from "react"
import NormalButton from "./NormalButton"

interface Prop{
  children:ReactNode
}

export default function Explain({children}:Prop){
  const [appear,setAppear]=useState(false)
  return (
    <div className={appear?"bg-[#f0f0f0] p-2 space-y-4 pb-5 mb-4":"p-2 pb-10"}>
      
      <p className="text-xs pl-5"><NormalButton onClick={()=>setAppear(!appear)}>{appear? "閉じる":"詳細"}</NormalButton></p>
      {appear &&(<div className="text-base">{children}</div>)}
      

    </div>
    
  )
}