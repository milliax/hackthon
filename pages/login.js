import Footer from "../component/Footer";
import Title from '../component/Title'
import {useState} from "react";

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function Send(){
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/login`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body: JSON.stringify({
                    email: email,
                    password: password
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
                                <div className="col-6 col-12-xlarge">
                                    <input type="email"
                                           value={email}
                                           onChange={e =>{setEmail(e.target.value)}}
                                           placeholder="Email"/>
                                </div>
                                <div className="col-6 col-12-xlarge">
                                    <input type="password"
                                           value={password}
                                           onChange={e =>{setPassword(e.target.value)}}
                                           placeholder="Password"/>
                                </div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value="登入" className="primary"/></li>
                                    </ul>
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