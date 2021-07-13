import {useState} from "react";

export default function Form(){
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
        <section>
            <label><h1>回報錯誤</h1></label>
            <form onSubmit={event=>{
                event.preventDefault()
                Send()
            }}>
                <div className="fields">
                    <div className="field half">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               name="name"
                               id="name"
                               value={name}
                               onChange={e =>{setName(e.target.value)}}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               name="email"
                               id="email"
                               value={email}
                               onChange={e=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message"
                                  id="message"
                                  rows="6"
                                  value={question}
                                  onChange={e=>{setQuestion(e.target.value)}}/>
                    </div>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="回報問題" className="primary"/></li>
                    <li><input type="reset" onClick={Clear}/></li>
                </ul>
            </form>
        </section>
    )
}