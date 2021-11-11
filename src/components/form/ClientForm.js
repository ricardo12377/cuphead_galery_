import React, {useEffect, useState } from 'react'
import Input from './Input'
import style from './ClientForm.module.css'
import axios from 'axios'



const initialValue = {
    "email": "",
    "number": 0,
    "textarea": ""
}

function ClientForm () {

    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [textarea, setTextarea] = useState('')
    const [cart, setCart] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const infos = { email, number, textarea }

        fetch('http://localhost:4000/infos', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(infos)
        })
        .then(() => {
            console.log("New infos Add.")
        })
    }

    


    return(
        <form className={style.form_container} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <br/>
                <input 
                type="email"
                name="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="number">Número</label>
                <br/>
                <input 
                type="number" 
                name="number" 
                id="number" 
                onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="textarea">Mande uma mensagem</label>
                <br/>
               <textarea 
               className={style.area_texto} 
               type="textarea" 
               name="textarea" 
               id="textarea" 
               onChange={(e) => setTextarea(e.target.value)} 
               placeholder="Digite sua mensagem"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>

    )
}


export default ClientForm;