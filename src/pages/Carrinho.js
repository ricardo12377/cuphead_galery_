


import { useState, useEffect } from 'react';
import style from './Carrinho.module.css'
import {useParams} from 'react-router-dom'

function Carrinho ({onClose = () => {}}) {

    
     const [qnt , setQnt] = useState('')
    const {id} = useParams()
    

    

     useEffect(() => {
        fetch('http://localhost:4000/cart/', {
            method: "GET",
            headers: { 'Content-type': 'application/json'}
        })
        .then((resp) => resp.json())
        .then((data) =>  setQnt(data))

     }, [id])
 

    function mostrar () {
        return console.log(qnt)
    }

    

    return(
        <div className={style.container}  >
            
            <div   className={style.carrinho} >
                <h1>Carrinho de Items</h1>
                <div  >Quantidade:</div>
                <div className={style.quantidade}>
                 {qnt ? parseInt(qnt.length) : null}
                </div>
                <h2>Total a pagar:</h2>
                <p  className={style.price} >R$:{qnt ? parseInt(qnt.length * 120)  : null}</p>

                <div className={style.buttons}>
                 <button className={style.finalizar}>Finalizar</button>
                 
                </div>
               
            </div>
            
            


        </div>
    )
}


export default Carrinho;