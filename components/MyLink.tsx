import Link from "next/link";
import { ReactNode } from "react";

interface Props{
  children:ReactNode;
  href:string;
  target?:string
}

export default function MyLink({children,href,target}:Props){
  return (
    href.startsWith('http') ? <a href={href} className="text-[#035ff3] font-bold underline" target={target}>{children}</a> : <Link href={href} className="text-[#035ff3] font-bold underline">{children}</Link>
  )
}