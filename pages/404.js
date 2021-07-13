import Head from 'next/head'
import Title from '../component/Title'
import Link from 'next/link'
import Footer from "../component/Footer";

export default function ErrorPage() {
    return (
        <>
            <div id="wrapper">
                <Title/>
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1>找不到網頁</h1>
                            </header>
                            <h2>請重新確認網頁位置，或在下列表單回報錯誤</h2>
                            <h3><Link href="/" >點此回主畫面</Link></h3>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>

            <Head>
                <title key="title">對不起-網頁不存在</title>
            </Head>
        </>
    )
}