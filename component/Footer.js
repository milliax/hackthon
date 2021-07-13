import Form from '../component/Footer/Form'

export default function Footer(){
    return(
        <>
            <section id="contact">
                <div className="inner">
                    <Form />
                    <section className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon solid alt fa-envelope" />
                                <h3>Email</h3>
                                <a href="mailto:info@sivir.pw">info@sivir.pw</a>
                            </div>
                        </section>

                        <section>
                            <div className="contact-method">
                                <span className="icon solid alt fa-home" />
                                <h3>Address</h3>
                                <span><br/>
										Taiwan</span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>

            <footer id="footer">
                <div className="inner">
                    {/*
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
                    */}
                    <ul className="copyright">
                        <li>&copy; usapnayn</li>
                        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                        <li>Construct: Milliax, Hsuan, NeoDoggy</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}