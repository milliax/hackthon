import Footer from "../component/Footer";
import Head from "next/head";
import Title from '../component/Title'

export default function Login() {
    return(
        <div id="wrapper">
            <Head>
                <title key="title">登入</title>
            </Head>
            <Title />
            <div id="main" className="alt">
                <h1> Login </h1>
            </div>
            <Footer/>
        </div>
    )
}