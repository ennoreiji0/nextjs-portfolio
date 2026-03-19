import Link from "next/link"

export default function Home(){
  return (
    <div>
      <h1 className="center">Portfolio</h1>
      <p className='right small'>高校1年 零次</p>
      <div>
        <h2 className="center">自己紹介</h2>
        <p>一番得意な言語はJavaScriptです。高1の3月からReactでゲームを作りはじめました。</p>
        <p>2026年の秋に応用情報技術者試験を受験しようと考えています。</p>
        <p>また、中3のときにセキュリティミニキャンプに参加し、そこで自分の技術が低いと気づいて以来、より情報系の勉強をがんばるようになりました。</p>
        <p>一番興味がある分野は情報セキュリティですが、まだまだ初心者です……。</p>
        <p>よろしくお願いいたします。</p>
      </div>
      <div>
        <h2 className="center">作ったもの</h2>
        <p className="danraku"><a href="https://github.com/ennoreiji0/nextjs-portfolio">・GitHubへのリンクはこちら</a></p>
        <p className="danraku"><Link href="/sheep">・二進法で羊を数えるゲーム(なかなか寝付けない日にぜひ!)</Link></p>
        {/*<p className="danraku"><Link >・「人力AI募集中」(PC限定のゲームです)</Link></p>*/}
      </div>
      <div>
        <h2 className="center">実績</h2>
        <p className="danraku">・ITパスポート取得(中3)</p>
        <p className="danraku">・セキュリティミニキャンプ参加(中3)</p>
        <p className="danraku">・情報オリンピック2次予選進出(高1)</p>
      </div>
    </div>
    )
}