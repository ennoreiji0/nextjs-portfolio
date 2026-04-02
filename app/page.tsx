'use client';
import BigTitle from "@/components/BigTitle";
import Paragraph from "@/components/Paragraph";
import MyLink from "@/components/MyLink";
import Header from "@/components/Header";
import Explain from "@/components/Explain";

export default function Home(){
  return (
    <div>  
        <Header>いろいろ</Header>
          <div>
            <p>・ゲームは<MyLink href="/games">こちら</MyLink></p>
            <Explain>
              <p>ミニゲームです。</p>
            </Explain>
          </div>
          <div>
            <p>・ツールは<MyLink href="/tools">こちら</MyLink></p>
            <Explain>
              <p>ツールを作りました!</p>
            </Explain>
          </div>
      
    </div>
    )
}