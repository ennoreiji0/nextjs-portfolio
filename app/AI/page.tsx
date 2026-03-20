'use client';
import { useState,useEffect } from "react";
import MyLink from "@/components/MyLink";
import BigTitle from "@/components/BigTitle";
import Paragraph from "@/components/Paragraph";
import BackToTop from "@/components/BackToTop";

export default function AI(){
  
  return (
    <>
      <BigTitle>人力AI募集中</BigTitle>
      <Paragraph>
        <MyLink href="/AI/summarize">要約処理</MyLink><br />
        
      </Paragraph>
      <BackToTop/>
    </>
  )
}