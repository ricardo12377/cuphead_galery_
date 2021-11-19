import style from './Navbar.module.css'
import foto from '../img/images.jpg'
import { Link } from "react-router-dom";
import carrinho from '../img/carrinho-carrinho.png'

import { useState } from 'react';
import casa from '../img/casa.png'
import carrinhosvg from '../img/carrinho.svg.svg'
import casasvg from '../img/casa.svg.svg'


function Navbar () {

    const [isModalVisible, setIsModalVisible] = useState(false)




    return (
        <nav className={style.container}  >
            
        <div className={style.perfil}>
            <div>Cup Head Galery</div>
        </div>


        <section  className={style.lista}>
           <div>
            <Link   className={style.item_lista} to="/">Home</Link>
           </div>

           <div >
            <Link  className={style.item_lista} to="/cadastro">Pedido personalizado</Link>
           </div>

           <div  >
            <Link   className={style.item_lista} to="/carrinho">Carrinho</Link>
           </div>
        </section>
       

             
            
        
        </nav>

    )
}

export default Navbar;