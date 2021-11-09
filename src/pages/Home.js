import style from './Home.module.css'
import example from '../img/download.jpg'
import { Link } from "react-router-dom";


function Home () {

    return(
        <div className={style.container}>
            <div>
            <h1>Cup Head Galery <em><span className={style.span}>A sua galeria de desenhos retrôs</span></em></h1>
            </div>
            <div>
                <h2>Encomende a sua</h2>
                <p>Se deseja um arte pesonalizada, clique no botao e preencha o formulário com as informações necessárias.</p>
                <div  className={style.encomende}>
          <Link to="/cadastro">
              <button className={style.button2}>Encomende sua arte</button>
          </Link>
          </div>

          <div className={style.galeria}>
              <h3>Caso queira uma das nossas artes já prontas, basta conferir nossa galeria de artes.</h3>
              <p>
                  <Link to="/galeria">
                      <button className={style.button2}>Galeria</button>
                  </Link>
              </p>
          </div>
            </div>
       
        </div>

    
    )
}

export default Home;