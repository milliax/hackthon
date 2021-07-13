import Title from "../../component/Title";
import Footer from '../../component/Footer'

export default function Post({data}) {
    return (
        <div id="wrapper">
            <Title title={`專欄介紹-${typeof(data)!=="undefined" && data.title}`}/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>{typeof(data)!=="undefined" && data.title}</h1>
                        </header>
                        {typeof (data) !== "undefined" && data['section'].map(item => {
                            return(
                                <>
                                    <h2 id="content">{item.title}</h2>
                                    <p>{item.context}</p>
                                </>
                            )
                        })}
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export async function getStaticProps(context) {
    const post = context.params.post

    const res = await fetch(`${process.env.NEXT_PUBLIC_STATIC}/hackthon/${post}.json`)
    const data = await res.json()

    return {
        props: {data}
    }
}

export async function getStaticPaths() {
    const paths = [
        '/post/pacific_garbage',
        '/post/reservation_in_taiwan',
        '/post/shihu_home',
        '/post/illegal_trade',
        '/post/forest_gone'
    ]
    return {
        paths: paths,
        fallback: true
    }
}