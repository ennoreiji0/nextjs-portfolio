'use client';


type Props=React.ComponentPropsWithoutRef<"button">

export default function NormalButton({children , ...props}:Props){
  return (
    <button className="
      w-fit
      cursor-pointer 
      rounded-full 
      bg-[#3333dd] 
      border-1
      border-[#5f5f5f]
      text-[#f0f0f0] 
      px-3 py-1
      shadow-[0_5px_0_0_#999999] 
      transition-all 
      duration-100 

      active:enabled:translate-y-[4px]
      active:enabled:shadow-[0_1px_0_0]

      disabled:cursor-default 
      disabled:bg-[#909090]
      disabled:shadow-none" 
      {...props}>{children}
    </button>
  )
}