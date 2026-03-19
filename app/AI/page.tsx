'use client';
import { useState,useEffect } from "react";
import Yoyaku from "./summarize/page";
import Link from "next/link";

export default function AI(){
  
  return (
    <>
      <h1>人力AI募集中</h1>
      <Link href={"/AI/summarize"}>要約処理</Link><br />
      <p><Link href="/">ポートフォリオのトップへ</Link></p>
    </>
  )
}