export default function Navigation() {
    return (
        <nav id="menu">
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="landing">Landing</a></li>
                <li><a href="generic">Generic</a></li>
                <li><a href="elements">Elements</a></li>
            </ul>
            <ul className="actions stacked">
                <li><a href="#" className="button primary fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </nav>
    )
}