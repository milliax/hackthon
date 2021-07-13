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
                <a href="index.html" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation />
            <div id="main" className="alt">
                <h1> Login </h1>
            </div>
            <Footer/>
        </div>
    )
}