import Footer from "../component/Footer";
import {useState} from "react";
import Swal from 'sweetalert2'
import Title from '../component/Title'

export default function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [name,setName] = useState('')

    async function Send(){
        if(email===''&&password===''&&name===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '請輸入下列表格之後再重試'
            })
            return
        }
        if(password !== password2){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '密碼及驗證碼不一樣'
            })
            return
        }
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/signup`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name
                })
            })
            const response = await res.json()
            console.log(response)

        }catch(err){
            window.alert(err)
        }
    }
    return(
        <div id="wrapper">
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
                                <div className="col-6 col-12-xlarge">
                                    <input type="text"
                                           value={name}
                                           onChange={e =>{setName(e.target.value)}}
                                           placeholder="Name"/>
                                </div>
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
                                <div className="col-6 col-12-xlarge">
                                    <input type="password"
                                           value={password2}
                                           onChange={e =>{setPassword2(e.target.value)}}
                                           placeholder="Password Confirmation"/>
                                </div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value="註冊" className="primary"/></li>
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