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
          <p>また、中3のときにセキュリティミニキャンプに参加し、そこで自分の技術が低いと気づいて以来、より情報系の勉強をがんばるようになりました。</p>
          <p>一番興味がある分野は情報セキュリティですが、まだまだ初心者です……。</p>
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
            <p>・<MyLink href="/sheep">二進法で羊を数えるゲーム</MyLink>(なかなか寝付けない日にぜひ!)</p>
            <Explain>
              <p>夜に眠れないときに羊を数えると眠れるという話は有名ですが、二進法で数えようとする人がなぜかいなかった(当たり前ですが)のでゲームにしました。</p>
              <p>もともとは中3のときにJavaScriptだけで作っていましたが、Next.jsの勉強のために作り直してみました。</p>
              <p>中3のときは、設定画面からゲーム画面に移動するときに、わざわざLocal Storageに設定の情報を入れていましたが、Reactでは設定情報を引数のようにしてゲーム画面のコンポーネントに渡すことができるので、便利だなと感じました。でも難しかったです。</p>
            </Explain>
          </div>
          <div>
            <p>・<MyLink href="/AI">「人力AI募集中」</MyLink>(PC限定のゲームです)</p>
            <Explain>
              <p>プレイヤーが生成AIになりきって仕事をするゲームです。今はまだ「要約ゲーム」しか作れていませんが、今後増やす予定です。</p>
              <p>文章のうち、消したい部分をマウスなどでなぞることで、要らない部分を消していきます。素早く、正確に要約すると「AI度」が上がります。</p>
              <p>最後の問題が終わった後にタイトル画面に戻るのですが、そのときには問題文を入れた配列が空になってしまっていて、もう一度始めることができないというバグがあったので、それを直すのが難しかったです。</p>
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