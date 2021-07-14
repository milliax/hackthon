import {useState} from "react";
import Title from "../component/Title";
import GoogleMap from "google-map-react";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import {Button, Card} from "react-bootstrap";
import Footer from "../component/Footer";

export default function Feedback(){
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [question,setQuestion] = useState('')

    async function Send(){
        const query = `&entry.1658956947=${name}&entry.1906292414=${email}&entry.1624246937=${question}&entry.74544941=${document.location.href}&submit=SUBMIT`
        const googleForm = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5xvRtxdY8XOghJKzXFTYSA_E44LlDr5TDt_kTJaFk5NJUvQ/formResponse'
        const url = encodeURI(`${googleForm}?${query}`)
        try{
            await fetch(url,{
                method: 'POST',
                mode: 'no-cors'
            })
            window.alert(`Message sent successful`)
        }catch (err){
            window.alert(`Message sent FAILED: ${err}`)
        }
        setQuestion('')
        setName('')
        setEmail('')
    }
    async function Clear(){
        setQuestion('')
        setName('')
        setEmail('')
    }

    return(
        <div id="wrapper">
            <Title title="錯誤回報"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>意見回饋</h1>
                        </header>
                        <div style={{display: 'flex', flexWrap: 'wrap', align: 'center'}}>
                            <form onSubmit={event=>{
                                event.preventDefault()
                                Send()
                            }}>
                                <div className="fields">
                                    <div className="field half">
                                        <label htmlFor="name">您的大名</label>
                                        <input type="text"
                                               name="name"
                                               id="name"
                                               value={name}
                                               onChange={e =>{setName(e.target.value)}}/>
                                    </div>
                                    <div className="field half">
                                        <label htmlFor="email">您的電子郵件</label>
                                        <input type="email"
                                               name="email"
                                               id="email"
                                               value={email}
                                               onChange={e=>{setEmail(e.target.value)}}/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="message">欲傳送訊息</label>
                                        <textarea name="message"
                                                  id="message"
                                                  rows="6"
                                                  value={question}
                                                  onChange={e=>{setQuestion(e.target.value)}}/>
                                    </div>
                                </div>
                                <ul className="actions">
                                    <li><button type="submit" className="primary">重送回饋</button></li>
                                    <li><input type="reset" onClick={Clear}/></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}