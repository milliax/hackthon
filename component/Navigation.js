import Link from 'next/link'
import Cookies from "universal-cookie";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {Container, Navbar, Nav} from "react-bootstrap";

export default function Navigation() {
    const cookies = new Cookies()
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const access = cookies.get('access_token')
        if (typeof (access) === "undefined") {
            console.log('not logged in')
            setLoggedIn(false)
        } else {
            console.log('logged in')
            setLoggedIn(true)
        }
    }, [])

    return (
        <Navbar bg="dark" expand="lg">
            <Container style={{color: 'white'}}>
                <Navbar.Brand href="/">
                    <div className="logo" style={{color: 'white'}}><strong>V-SDGs</strong> <span>By usapnayn</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!loggedIn ?
                            <>
                                <Nav.Link href="/dashboard" style={{color: 'white'}}>平台總覽</Nav.Link>
                                <Nav.Link href="/login" style={{color: 'white'}}>登入</Nav.Link>
                                <Nav.Link href="/signup" style={{color: 'white'}}>註冊</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href="/report" style={{color: 'white'}}>通報環境災害</Nav.Link>
                                <Nav.Link href="/discover" style={{color: 'white'}}>探索附近災害</Nav.Link>
                                <Nav.Link href="/logout" style={{color: 'white'}}>登出</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
/*
    return (
        <nav id="menu">
            <ul className="links">
                <li><Link href="/">主畫面</Link></li>
                <li><Link href="/discover">探索</Link></li>
                <li><Link href="/report">回報問題</Link></li>
            </ul>
            <ul className="actions stacked">
                {
                    (loggedIn)? (
                        <>
                            <li><a href="/login" className="button primary fit">登入</a></li>
                            <li><a href="/signup" className="button fit">註冊</a></li>
                        </>
                    ) : (
                        <>
                            <li><button className="button primary fit" onClick={logout}>登出</button></li>
                        </>
                    )
                }
            </ul>
        </nav>
    )

}*/