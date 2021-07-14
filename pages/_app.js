import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import '../styles/fontawesome-all.min.css'
import Head from 'next/head'


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title key="title">聯合國永續發展</title>
            </Head>
            <Component {...pageProps} />
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/jquery.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/jquery.scrolly.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/jquery.scrollex.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/browser.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/breakpoints.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/util.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/main.js`}/>
        </>
    )
}

export default MyApp
