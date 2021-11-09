import style from './Navbar.module.css'
import foto from '../img/images.jpg'
import { Link } from "react-router-dom";


function Navbar () {


    return (
        <nav className={style.container}>
        <div className={style.perfil}>
            <img src={foto} alt="foto1" />
            <div>Mr.Cup Head Artist.</div>
        </div>
        <div className={style.text}>
            <h2>Galeria de desenhos retrô</h2>
        </div>
        <div>
        <ul className={style.lista}>
          <li  className={style.home}>
          <Link to="/">
              <button className={style.button1}>Home</button>
          </Link>
          </li>
         
       
      </ul>
        </div>
        </nav>

    )
}

export default Navbar;