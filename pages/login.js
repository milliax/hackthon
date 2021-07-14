import Footer from "../component/Footer";
import Title from '../component/Title'
import {useState} from "react";
import {LinearProgress} from "@material-ui/core";
import Swal from "sweetalert2";
import Cookies from 'universal-cookie'
import {useRouter} from "next/router";

export default function Login() {
    const cookies = new Cookies()
    const router = useRouter()
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function Send(){
        try{
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/auth/login`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body: JSON.stringify({
                    account,
                    password
                })
            })
            const response = await res.json()
            setLoading(false)
            console.log(response)
            if(typeof(response['access_token'])==="undefined"){
                throw response['error']['message']
            }
            cookies.set('access_token', response['access_token'])
            await Swal.fire({
                icon: 'success',
                title: '登入成功'
            })
            cookies.set('reload',true)
            await router.push('/')
        }catch(err){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err
            })
        }
    }

    return (
        <div id="wrapper">
            <LinearProgress hidden={!loading}/>
            <Title title="登入"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>登入</h1>
                        </header>
                        <form onSubmit={event => {
                            event.preventDefault()
                            Send()
                        }}>
                            <div className="row gtr-uniform">
                                <div className="col-12">
                                    <input type="text"
                                           value={account}
                                           onChange={e =>{setAccount(e.target.value)}}
                                           placeholder="帳號"/>
                                </div>
                                <div className="col-12">
                                    <input type="password"
                                           value={password}
                                           onChange={e =>{setPassword(e.target.value)}}
                                           placeholder="密碼"/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="primary" style={{width: "100%"}}>登入</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}