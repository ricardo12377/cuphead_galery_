import style from './Modal.module.css'
import { icons } from 'react-icons';
import { useState} from 'react'

function Modal  ({title, text, price, onClose = () => {}})  {

  const [cart, setCart] = useState([])
  
  
  

   function carrinho (e) {
       e.preventDefault();
       const item = {title, text, price}

       fetch(' http://localhost:4000/cart', {
           method:"POST",
           headers: {
               'Content-type': 'application/json'
           }, body: JSON.stringify(item)
       }).then(() => {
           console.log('Deu certo')
       })
       
   }

    

    return(
        <div className={style.modal} onClick={onClose}>
          <div className={style.container}>
              <div className={style.title}>
                   <h1 id="title" name="title">{title}</h1>
              </div>
              
              <div  className={style.text}>
                  <div>Sobre o desenho:</div>
              <p id="text" name="text">{text}</p>
              </div>
              
              <div className={style.price}>
              <p id="price" name="price">R$:{price}</p> 
              </div>
              
              <button id="button" onClick={carrinho} className={style.button}>Adicionar ao carrinho</button>
              
          </div>
        </div>

    )
}


export default Modal;