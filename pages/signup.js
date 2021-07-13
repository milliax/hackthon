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