import {useEffect, useState} from "react";
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

export default function Logout() {
    const [loading, setLoading] = useState(false)
    const cookies = new Cookies()

    useEffect(() => {
        if(loading === false){
            logout()
        }
    }, [])

    function logout() {
        setLoading(true)
        cookies.remove('access_token')
        Swal.fire({
            icon: "success",
            title: "成功",
            text: "登出成功"
        }).then(()=>{
            document.location.href = '/'
        })

    }

    return (
        <h1 style={{textAlign: 'center'}}>Signing out</h1>
    )
}