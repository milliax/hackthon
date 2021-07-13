import Navigation from "./Navigation";
import Head from 'next/head'

export default function Title(props) {
    return (
        <>
            <Head>
                <title key="title">{props.title} - Life on Land</title>
            </Head>
            <header id="header">
                <a href="/" className="logo"><strong>Forty</strong> <span>By usapnayn</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation/>
        </>
    )
}