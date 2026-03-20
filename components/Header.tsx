import { ReactNode } from "react";

interface Props{
    children:ReactNode;
}

export default function Header({children}:Props){
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-[#3333aa] mt-10 mb-10">{children}</h1>
    </>
  )
}