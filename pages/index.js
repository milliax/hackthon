import Navigation from "../component/Navigation";
import Spotlight from "../component/Home/Spotlight";
import Footer from "../component/Footer";
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
} 
*/

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
                    <Spotlight title="太平洋垃圾島"
                               context="每年成千上萬隻海鷗葬身此地"
                               link="/post/pacific_garbage"/>
                    <Spotlight title="全球最大熱帶植物保種中心在台灣"
                               context="目前熱帶植物正瀕臨滅絕，如何挽救？"
                               link="/post/reservation_in_taiwan"/>
                    <div class="slideshow-container">
                        <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="img_mountains_wide.jpg" style={{width: "100%"}}/>
                        <div className="text">1</div>
                        </div>
                    </div>
                    <div class="slideshow-container">
                        <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src="img_mountains_wide.jpg" style={{width: "100%"}}/>
                        <div className="text">2</div>
                        </div>
                    </div>
                    <div class="slideshow-container">
                        <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src="img_mountains_wide.jpg" style={{width: "100%"}}/>
                        <div className="text">3</div>
                        </div>
                    </div>
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