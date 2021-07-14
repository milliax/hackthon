import Navigation from "../component/Navigation";
import Spotlight from "../component/Home/Spotlight";
import Footer from "../component/Footer";
import {Carousel} from 'react-bootstrap'

export default function Home() {
    return (
        <div id="wrapper">
            <header id="header" className="alt">
                <a href="/" className="logo"><strong>V-SDGs</strong><span>By Team usapnayn</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation/>
            <section id="banner" className="major">
                <div className="inner">
                    <header className="major">
                        <h1>SDG志願者媒合平台</h1>
                    </header>
                    <div className="content">
                        <p>志願者，是一群強大的力量，能撐起一個個美好的理想</p>
                        <ul className="actions">
                            <li><a href="/signup" className="button next scrolly">加入志願者行列</a></li>
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
                </section>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section id="one" className="tiles">
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

                {/*<section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>回報</h2>
                        </header>
                        <p>回報</p>
                        <ul className="actions">
                            <li><a href="/report" className="button next">現在開始</a></li>
                        </ul>
                    </div>

                </section>*/}
                <Footer />

            </div>
        </div>
    )
}