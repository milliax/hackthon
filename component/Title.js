import Navigation from "./Navigation";

export default function Title() {
    return (
        <>
            <header id="header">
                <a href="/" className="logo"><strong>Forty</strong> <span>By usapnayn</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Navigation/>
        </>
    )
}