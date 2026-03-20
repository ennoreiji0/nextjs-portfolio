'use client';
import { useState,useEffect } from "react";
import MyLink from "@/components/MyLink";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import BackToTop from "@/components/BackToTop";

export default function AI(){
  
  return (
    <>
      <Header>人力AI募集中</Header>
      <Paragraph>
        <MyLink href="/AI/summarize">・文章を要約する簡単なお仕事です！</MyLink><br />
      </Paragraph>
      <BackToTop/>
    </>
  )
}