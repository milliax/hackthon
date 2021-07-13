import Footer from "../component/Footer";
import {useState} from "react";
import Swal from 'sweetalert2'
import Title from '../component/Title'
import {LinearProgress} from "@material-ui/core";

export default function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [name,setName] = useState('')
    const [account,setAccount] = useState('')
    const [loading, setLoading] = useState(false)

    async function Send(){
        if(email==='' || password==='' || name==='' || password2 === '' || account === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '表格中有資料尚未填寫'
            })
            return
        }
        if(password !== password2){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '密碼兩次輸入的不同'
            })
            return
        }
        try{
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/register`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body: JSON.stringify({
                    email,
                    password,
                    name,
                    account
                })
            })
            const response = await res.json()
            setLoading(false)
            console.log(response)

        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err
            })
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