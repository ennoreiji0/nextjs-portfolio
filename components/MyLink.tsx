'use client';
import Link from "next/link";
import { ReactNode } from "react";

interface Props{
  href:string;
  target?:string
  children:ReactNode;
}

export default function MyLink({href,target,children}:Props){
  return (
    href.startsWith('http') ? <a href={href} className="text-[#035ff3] font-bold underline" target={target}>{children}</a> : <Link href={href} className="text-[#035ff3] font-bold underline">{children}</Link>
  )
}