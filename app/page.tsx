'use client';
import BigTitle from "@/components/BigTitle";
import Paragraph from "@/components/Paragraph";
import MyLink from "@/components/MyLink";
import Header from "@/components/Header";
import Explain from "@/components/Explain";

export default function Home(){
  return (
    <div>
      <Header>Portfolio</Header>
      <p className='text-xl text-right'>高校1年 零次</p>
      <div>
        <BigTitle>自己紹介</BigTitle>
        <Paragraph>
          <p>一番得意な言語はJavaScriptです。高1の3月からNext.jsでゲームを作りはじめました。</p>
          <p>2026年の秋に応用情報技術者試験を受験しようと考えています。</p>
          <p>また、中3のときにセキュリティミニキャンプに参加し、そこで自分の技術が低いと気づいて以来、より情報系の勉強に打ち込むようになりました。</p>
          <p>一番興味がある分野は情報セキュリティですが、まだまだ初心者です……。CTFを最近始めたばかりなので、これからがんばります。</p>
          <p>よろしくお願いいたします。</p>
        </Paragraph>
      </div>
      <div>
        <BigTitle>作ったもの</BigTitle>
        <Paragraph>
          <div>
            <p>・GitHubへのリンクは<MyLink href="https://github.com/ennoreiji0/nextjs-portfolio" target="_blank">こちら</MyLink></p>
            <Explain>
              <p>このサイトと、下記のゲームをNext.jsで作りました。そのリンクです。</p>
            </Explain>
          </div>
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
          <div>
            <p>・CDMAについての自由研究</p>
            <Explain>
              <p>高1の夏休みの自由研究で、CDMAという通信方式について調べました。</p>
            </Explain>
          </div>
        </Paragraph>
      </div>
      <div>
        <BigTitle>実績</BigTitle>
        <Paragraph>
          <p>・ITパスポート取得(中3)</p>
          <p>・セキュリティミニキャンプ参加(中3)</p>
          <p>・情報オリンピック2次予選進出(高1)</p>
        </Paragraph>
        <div className="h-30"></div>
      </div>
    </div>
    )
}