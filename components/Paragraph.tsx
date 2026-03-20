'use client';

import { ReactNode } from "react";

interface Props{
  children:ReactNode;
}

export default function Paragraph({children}:Props){
  return (
    <div className="ml-3 text-xl space-y-1">
      {children}
    </div>
  )
}