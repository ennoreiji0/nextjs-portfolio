'use client';
import BigTitle from "@/components/BigTitle";
import Paragraph from "@/components/Paragraph";
import MyLink from "@/components/MyLink";
import Header from "@/components/Header";

export default function Home(){
  return (
    <div>
      <Header>Portfolio</Header>
      <p className='text-xl text-right'>高校1年 零次</p>
      <div>
        <BigTitle>自己紹介</BigTitle>
        <Paragraph>
          <p>一番得意な言語はJavaScriptです。高1の3月からReactでゲームを作りはじめました。</p>
          <p>2026年の秋に応用情報技術者試験を受験しようと考えています。</p>
          <p>また、中3のときにセキュリティミニキャンプに参加し、そこで自分の技術が低いと気づいて以来、より情報系の勉強をがんばるようになりました。</p>
          <p>一番興味がある分野は情報セキュリティですが、まだまだ初心者です……。</p>
          <p>よろしくお願いいたします。</p>
        </Paragraph>
      </div>
      <div>
        <BigTitle>作ったもの</BigTitle>
        <Paragraph>
          <p>・GitHubへのリンクは<MyLink href="https://github.com/ennoreiji0/nextjs-portfolio" target="_blank">こちら</MyLink></p>
          <p>・<MyLink href="/sheep">二進法で羊を数えるゲーム</MyLink>(なかなか寝付けない日にぜひ!)</p>
          <p>・<MyLink href="/AI">「人力AI募集中」</MyLink>(PC限定のゲームです)</p>
          <p>・CDMAについての自由研究</p>
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