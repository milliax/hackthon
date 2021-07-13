import '../styles/main.css'
import '../styles/fontawesome-all.min.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/jquery.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/jquery.scrolly.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/jquery.scrollex.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/browser.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/breakpoints.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/util.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/assets/js/main.js`}/>
        </>
    )
}

export default MyApp
