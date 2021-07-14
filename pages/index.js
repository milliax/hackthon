import Spotlight from "../component/Home/Spotlight";
import Footer from "../component/Footer";
import {useEffect, useState} from "react";
import Cookies from 'universal-cookie'

export default function Home() {
    const [loggedIn,setLoggedIn] = useState(false)
    const cookies = new Cookies()

    useEffect(() => {
        const access = cookies.get('access_token')
        if (typeof (access) === "undefined") {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }, [])

    return (
        <div id="wrapper">
            <section id="banner" className="major">
                <div className="inner">
                    <header className="major">
                        <h1>SDG環境災害通報平台</h1>
                    </header>
                    <div className="content">
                        <p>志願者，是一群強大的力量，能撐起一個個美好的理想</p>
                        <ul className="actions">
                            {!loggedIn ?
                                <li><a href="/signup" className="button next scrolly">立即通報環境災害</a></li>
                                :
                                <li><a href="/report" className="button next scrolly">立即通報環境災害</a></li>
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <div id="main">
                <section id="one" className="tiles">
                    <Spotlight title="太平洋垃圾島"
                               context="每年成千上萬隻海鷗葬身此地"
                               link="/post/pacific_garbage"/>
                    <Spotlight color="#d74793"
                               title="全球最大熱帶植物保種中心在台灣"
                               context="目前熱帶植物正瀕臨滅絕，如何挽救？"
                               link="/post/reservation_in_taiwan"/>

                    <Spotlight title="給石虎安心的家"
                               context="為野生動物守護安心家園"
                               link="/post/shihu_home"
                               className={"next"}/>
                    <Spotlight title="非法販賣的野生動物"
                               context="保護它們"
                               link="/post/illegal_trade"/>
                    <Spotlight title="森林面積佔總土地面積過少"
                               context="該如何挽救?"
                               link="/post/forest_gone"/>
                </section>
                <Footer />

            </div>
        </div>
    )
}