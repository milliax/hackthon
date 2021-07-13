import Footer from "../component/Footer";
import Title from '../component/Title'
import {useState} from "react";

export default function Login() {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    async function Send(){
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/login`,{
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
            console.log(response)

        }catch(err){
            window.alert(err)
        }
    }

    return (
        <div id="wrapper">
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