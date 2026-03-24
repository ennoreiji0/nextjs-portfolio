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
        <Header>ゲーム一覧</Header>
          <Paragraph>
            <div>
              <p>・<MyLink href="/games/sheep">二進法で羊を数えるゲーム</MyLink>(なかなか寝付けない日にぜひ!)</p>
              <Explain>
                <p>夜に眠れないときに羊を数えると眠れるという話は有名ですが、二進法で数えようとする人がなぜかいなかった(当たり前ですが)のでゲームにしました。</p>
                <p>もともとは中3のときにJavaScriptだけで作っていましたが、Next.jsの勉強のために作り直してみました。</p>
                <p>中3のときは、設定画面からゲーム画面に移動するときに、わざわざLocal Storageに設定の情報を入れていましたが、Reactでは設定情報を引数のようにしてゲーム画面のコンポーネントに渡すことができるので、便利だなと感じました。でも難しかったです。</p>
              </Explain>
            </div>
            <div>
            <p>・<MyLink href="/games/AI">「人力AI募集中」</MyLink>(PC限定のゲームです)</p>
            <Explain>
              <p>プレイヤーが生成AIになりきって仕事をするゲームです。今はまだ「要約ゲーム」しか作れていませんが、今後増やす予定です。</p>
              <p>文章のうち、消したい部分をマウスなどでなぞることで、要らない部分を消していきます。素早く、正確に要約すると「AI度」が上がります。</p>
              <p>最後の問題が終わった後にタイトル画面に戻るのですが、そのときには問題文を入れた配列が空になってしまっていて、もう一度始めることができないというバグがあったので、それを直すのが難しかったです。</p>
            </Explain>
            </div>
          </Paragraph>
          <BackToTop />



        </div>
    )
}