import Navigation from "./Navigation";
import Head from 'next/head'

export default function Title(props) {
    return (
        <>
            <Head>
                <title key="title">{props.title} - V-SDGs</title>
            </Head>
            <header id="header">
                <a href="/" className="logo"><strong>V-SDGs</strong> <span>By Team usapnayn</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation/>
        </>
    )
}