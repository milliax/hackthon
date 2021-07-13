import Link from 'next/link'

export default function Navigation() {
    return (
        <nav id="menu">
            <ul className="links">
                <li><Link href="/">主畫面</Link></li>
            </ul>
            <ul className="actions stacked">
                <li><a href="/login" className="button primary fit">登入</a></li>
                <li><a href="/signup" className="button fit">註冊</a></li>
            </ul>
        </nav>
    )
}