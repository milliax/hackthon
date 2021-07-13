import Navigation from "../component/Navigation";
import Spotlight from "../component/Home/Spotlight";

export default function Home() {
    return (
        <>
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

                </div>

                <section id="contact">
                    <div className="inner">
                        <section>
                            <form method="post" action="#">
                                <div className="fields">
                                    <div className="field half">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name"/>
                                    </div>
                                    <div className="field half">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email"/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" rows="6"></textarea>
                                    </div>
                                </div>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" className="primary"/></li>
                                    <li><input type="reset" value="Clear"/></li>
                                </ul>
                            </form>
                        </section>
                        <section className="split">
                            <section>
                                <div className="contact-method">
                                    <span className="icon solid alt fa-envelope"></span>
                                    <h3>Email</h3>
                                    <a href="#">information@untitled.tld</a>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    <span className="icon solid alt fa-phone"></span>
                                    <h3>Phone</h3>
                                    <span>(000) 000-0000 x12387</span>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    <span className="icon solid alt fa-home"></span>
                                    <h3>Address</h3>
                                    <span>1234 Somewhere Road #5432<br/>
										Nashville, TN 00000<br/>
										United States of America</span>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>

                <footer id="footer">
                    <div className="inner">
                        <ul className="icons">
                            <li><a href="#" className="icon brands alt fa-twitter"><span
                                className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands alt fa-facebook-f"><span
                                className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands alt fa-instagram"><span
                                className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a>
                            </li>
                            <li><a href="#" className="icon brands alt fa-linkedin-in"><span
                                className="label">LinkedIn</span></a>
                            </li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Untitled</li>
                            <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}