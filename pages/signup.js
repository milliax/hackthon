import Head from "next/head";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

export default function Signup(){
    return(
        <div id="wrapper">
            <Head>
                <title key="title">註冊</title>
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
                            <h1>Signup</h1>
                        </header>
                        <h2>註冊來成為會員</h2>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}