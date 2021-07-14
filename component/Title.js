import Navigation from "./Navigation";
import Head from 'next/head'

export default function Title(props) {
    return (
        <>
            <Head>
                <title key="title">{props.title} - SDGs 15th</title>
            </Head>
        </>
    )
}