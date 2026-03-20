'use client';

import { ReactNode } from "react";

interface Props{
  children:ReactNode;
}

export default function BigTitle({children}:Props){
    
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-15 mb-5 text-[#4444dd]">{children}</h2>
    </>
  )
}