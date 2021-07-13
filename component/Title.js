import Navigation from "./Navigation";
import Head from 'next/head'

export default function Title(props) {
    return (
        <>
            <Head>
                <title key="title">{props.title} - SDGs 15th</title>
            </Head>
            <header id="header">
                <a href="/" className="logo"><strong>SDGs 15th</strong> <span>By usapnayn</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation/>
        </>
    )
}