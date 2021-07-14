import Navigation from "../component/Navigation";
import Spotlight from "../component/Home/Spotlight";
import Footer from "../component/Footer";
import {Carousel} from 'react-bootstrap'

export default function Home() {
    return (
        <div id="wrapper">
            <section id="banner" className="major">
                <div className="inner">
                    <header className="major">
                        <h1>聯合國永續發展</h1>
                    </header>
                    <div className="content">
                        <p>根據聯合國永續發展第15項</p>
                        <ul className="actions">
                            <li><a href="#one" className="button next scrolly">Get Started</a></li>
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
                               link="/post/shihu_home"/>
                    <Spotlight title="非法販賣的野生動物"
                               context="保護它們"
                               link="/post/illegal_trade"/>
                    <Spotlight title="森林面積佔總土地面積過少"
                               context="該如何挽救?"
                               link="/post/forest_gone"/>
                </section>

                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>申報環境危機</h2>
                        </header>
                        <p>立即利用本系統讓大家知道生態正面臨的重大危機</p>
                        <ul className="actions">
                            <li><a href="/report" className="button next">現在開始</a></li>
                        </ul>
                    </div>
                </section>
                <section id="three">
                    <div className="inner">
                        <header className="major">
                            <h2>探索潛在危機</h2>
                        </header>
                        <p>利用Google地圖，生態的潛在危機一目了然</p>
                        <ul className="actions">
                            <li><a href="/report" className="button next">現在開始</a></li>
                        </ul>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    )
}