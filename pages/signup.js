import Footer from "../component/Footer";
import {useState} from "react";
import Swal from 'sweetalert2'
import Title from '../component/Title'
import {LinearProgress} from "@material-ui/core";
import ReCAPTCHA from 'react-google-recaptcha'
import {useRouter} from "next/router";

export default function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [name,setName] = useState('')
    const [account,setAccount] = useState('')
    const [loading, setLoading] = useState(false)
    const [verified,setVerified] = useState(false)
    const router = useRouter()

    async function Send(){
        if(!verified){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '請完成我不是機器人驗證'
            })
            return
        }
        if(email==='' || password==='' || name==='' || password2 === '' || account === ''){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '表格中有資料尚未填寫'
            })
            return
        }
        if(password.length < 5){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '密碼長度需大於5個字'
            })
            return
        }
        if(password !== password2){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '密碼兩次輸入的不同'
            })
            return
        }
        try{
            let data = {
                email,
                password,
                name,
                account
            }
            //console.log(data)
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/auth/register`,{
                method: 'POST',
                cors: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body: JSON.stringify(data)
            })
            const response = await res.json()
            setLoading(false)
            console.log(response)
            if(typeof(response['name']) === "undefined"){
                throw response['message']
            }
            await Swal.fire({
                icon: 'success',
                title: '註冊成功',
            })
            await router.push('/login')
        }catch(err){
            if(err === "The given data was invalid."){
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "帳號重複，請嘗試其他名稱"
                })
            }else{
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err
                })
            }

            setLoading(false)
        }
    }
    return(
        <div id="wrapper">
            <LinearProgress hidden={!loading}/>
            <Title title="註冊" />
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>註冊</h1>
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
                                    <input type="text"
                                           value={name}
                                           onChange={e =>{setName(e.target.value)}}
                                           placeholder="您的姓名"/>
                                </div>
                                <div className="col-12">
                                    <input type="email"
                                           value={email}
                                           onChange={e =>{setEmail(e.target.value)}}
                                           placeholder="您的Email"/>
                                </div>
                                <div className="col-12">
                                    <input type="password"
                                           value={password}
                                           onChange={e =>{setPassword(e.target.value)}}
                                           placeholder="密碼"/>
                                </div>
                                <div className="col-12">
                                    <input type="password"
                                           value={password2}
                                           onChange={e =>{setPassword2(e.target.value)}}
                                           placeholder="確認密碼"/>
                                </div>
                                <ReCAPTCHA
                                    sitekey="6Lc2_5IbAAAAAIIN3k58SHRpvQBw6scrbzcOWQj9"
                                    onChange={event=>{console.log(event);setVerified(true)}}
                                    />
                                <div className="col-12">
                                    <button type="submit" className="primary" style={{width: "100%"}}>註冊</button>
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