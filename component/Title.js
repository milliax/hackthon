import Navigation from "./Navigation";
import Head from 'next/head'

export default function Title(props) {
    return (
        <>
            <Head>
                <title key="title">{props.title} - V-SDGs</title>
            </Head>
        </>
    )
}