import Navigation from "../component/Navigation";
import Spotlight from "../component/Home/Spotlight";
import Footer from "../component/Footer";

export default function Home() {
    return (
        <div id="wrapper">
            <header id="header" className="alt">
                <a href="/" className="logo"><strong>FIFTEEN</strong> <span>By usapnayn</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation/>
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
                    <Spotlight img="images/pic01.jpg"
                               title="Aliquam"
                               context="Ipsum dolor sit amet"
                               link="/"/>
                    <Spotlight img="images/pic02.jpg"
                               title=""
                               context="Ipsum dolor sit amet"
                               link="/"/>
                </section>

                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>回報</h2>
                        </header>
                        <p>回報</p>
                        <ul className="actions">
                            <li><a href="/report" className="button next">現在開始</a></li>
                        </ul>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}