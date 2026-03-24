'use client';
import { useEffect, useState } from "react";
import NormalButton from "@/components/NormalButton";
import copyText from "@/components/copyText";
import ToToolHome from "@/components/ToToolHome";

export default function Home() {
  const [buttons,setNormalButtons]=useState<number[]>([1,2,3,4,5,6,7,8,9])
  const [enzanshi,setEnzanshi]=useState<string[]>(["+","-","*","/"])
  const [keisanShiki,setKeisanShiki]=useState<string>('')
  const [kigouEnabled,setKigouEnabled]=useState<boolean>(false)
  const [zeroEnabled,setZeroEnabled]=useState<boolean>(true);
  const [kekka,setKekka]=useState<number|null>(null)
  const [copyOkay,setCopyOkay]=useState<string>('')
  const Appear=(index:number|string)=>{
    
    setKeisanShiki(keisanShiki+index)
  }
  useEffect(()=>{
    const saigo=keisanShiki[keisanShiki.length-1]
    if(!keisanShiki || enzanshi.includes(saigo)){
      setKigouEnabled(false)
    }else{
      setKigouEnabled(true);
    }
    if(saigo=="/"){
      setZeroEnabled(false);
    }else{
      setZeroEnabled(true);
    }
  },[keisanShiki])

  const keisan=()=>{
    let result:number=0;
    const parts=keisanShiki.split(/([+*/-])/)
    result=parseInt(parts[0])
    for(let i=1;i<parts.length-1;i+=2){
      const num=Number(parts[i+1])
      switch(parts[i]){
        case "+":
          result+=num
          break;
        case "-":
          result-=num
          break;
        case "*":
          result*=num
          break;
        case "/":
          result/=num
          break;
      }
    }

    setKekka(result)
  }

  const onCopy=(okay:boolean)=>{
    if(okay){
      setCopyOkay("コピー完了")
      
    }else{
      setCopyOkay("コピーに失敗しました")
    }
    setTimeout(()=>{
      setCopyOkay("")
    },2000)
  }

  return (
    <div className="space-y-1">
    <div>
    <NormalButton
      
      onClick={()=>Appear(0)}
      disabled={!zeroEnabled}
      >0</NormalButton>
    {buttons.map((btn,index)=>{  
      return <NormalButton 
      key={index}

      onClick={()=>Appear(btn)}
      >{btn}</NormalButton>
    })}
    </div>
    <br />
    <div>
      {enzanshi.map((btn,index)=>{
        return <NormalButton
        key={index}

        onClick={()=>Appear(btn)}
        disabled={!kigouEnabled}
        >
        {btn}</NormalButton>
      })}
      <NormalButton 
        onClick={()=>{
          setKeisanShiki(keisanShiki.slice(0,-1))
        }}

        disabled={!keisanShiki}
      >Delete</NormalButton>
    </div>
    
    <p>計算:{keisanShiki}</p>
    <NormalButton
      onClick={keisan}
      disabled={!keisanShiki}

    >送信</NormalButton>
    <p>結果:{kekka}</p>
    <NormalButton
      onClick={async ()=>{
        const result=await copyText(String(kekka))
        onCopy(result)
      }}
      disabled={!keisanShiki}
    >
      結果をコピー
    </NormalButton>
    <p>{copyOkay}</p>
    <p>左から順番にしか計算できません……すみません</p>

    <ToToolHome/>
    </div>
  )
}
