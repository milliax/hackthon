import React from 'react'
import '../styles/main.css'
import '../styles/fontawesome-all.min.css'

function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Component {...pageProps} />
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/jquery.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/jquery.scrolly.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/jquery.scrollex.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/browser.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/breakpoints.min.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/util.js`}/>
            <script src={`${process.env.NEXT_PUBLIC_DATABASE}/hackthon/assets/js/main.js`}/>
        </React.Fragment>
    )
}

export default MyApp
