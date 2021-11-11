import style from './Navbar.module.css'
import foto from '../img/images.jpg'
import { Link } from "react-router-dom";
import carrinho from '../img/carrinho-carrinho.png'
import Carrinho from './layout/Carrinho'
import { useState } from 'react';
import casa from '../img/casa.png'
import carrinhosvg from '../img/carrinho.svg.svg'
import casasvg from '../img/casa.svg.svg'

function Navbar () {

    const [isModalVisible, setIsModalVisible] = useState(false)




    return (
        <nav className={style.container}>
        <div className={style.perfil}>
            <img src={foto} alt="foto1" />
            <div>Mr.Cup Head Artist.</div>
        </div>
        <div className={style.text}>
            <h2>Galeria de desenhos vintages</h2>
        </div>

        <div className={style.navbar}>
        <ul className={style.lista}>
          <li  className={style.home}>
          <Link to="/">
              <img src={casasvg} />
          </Link>
          </li>
         <div>
          <img src={carrinhosvg} className={style.carrinho_container} alt="carrinho" onClick={() => setIsModalVisible(true)} />
          {isModalVisible ? <Carrinho  onClose={() => {setIsModalVisible(false)}} /> : null }
         </div>
       
      </ul>
        </div>
        </nav>

    )
}

export default Navbar;