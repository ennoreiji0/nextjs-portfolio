
'use client';
import { useState } from "react";
import Header from "@/components/Header";
import MyLink from "@/components/MyLink";
import Explain from "@/components/Explain";
import Paragraph from "@/components/Paragraph";
import BackToTop from "@/components/BackToTop";
//import { SignInButton, SignUpButton, UserButton, } from "@clerk/nextjs";


export default function GameHome(){
    return (
      <div>
        <Header>ツール一覧</Header>
          <Paragraph>
            <div>
                <p><MyLink href="/tools/calculator">電卓</MyLink></p>
                <Explain>
                    <p>左から順番にしか計算できません……すみません
                    </p>
                </Explain>
            </div>
          </Paragraph>
          <BackToTop />



        </div>
    )
}