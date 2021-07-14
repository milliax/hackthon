import Link from 'next/link'
import Cookies from "universal-cookie";
import {useEffect, useRef, useState} from "react";
import Swal from "sweetalert2";

export default function Navigation() {
    const cookies = new Cookies()

    useEffect(()=>{
        const reload = cookies.get('reload')
        if(typeof(reload)!=="undefined"){
            cookies.remove('reload')
            window.location.reload()
        }
    },[])

    function logout(){
        cookies.set('access_token',null)
        Swal.fire({
            icon: "success",
            title: "成功",
            text: "登出成功"
        })
    }

    const loggedIn = ()=>{
        const access = cookies.get('access_token')
        if(typeof(access) === "undefined"){
            return false
        }else{
            return true
        }
    }

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
}