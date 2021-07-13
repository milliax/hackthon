import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import Head from "next/head";

export default function Login() {
    return(
        <div id="wrapper">
            <Head>
                <title key="title">登入</title>
            </Head>
            <header id="header">
                <a href="index" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation />
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>Login</h1>
                        </header>
                        <h2>請先登入來使用本系統</h2>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}