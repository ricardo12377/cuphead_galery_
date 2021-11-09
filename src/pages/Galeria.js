
import foto from '../img/download.jpg'
import style from './Galeria.module.css'
import foto2 from '../desenhos/foto2.jpg'
import foto3 from '../desenhos/foto3.jpg'
import foto4 from '../desenhos/foto4.jpg'
import foto5 from '../desenhos/foto5.jpg'
import foto6 from '../desenhos/foto6.jpg'
import foto7 from '../desenhos/foto7.jpg'
import foto8 from '../desenhos/foto8.jpg'
import foto9 from '../desenhos/foto9.jpg'
import foto10 from '../desenhos/foto10.jpg'
import foto11 from '../desenhos/foto11.jpg'
import foto12 from '../desenhos/foto12.jpg'

import {useState} from 'react'
import Modal from '../components/layout/Modal.js'

function Galeria () {

     const [isModalVisible, setIsModalVisible] = useState(false) 

   



    return(
        <div className={style.container}>
            <section className={style.lista}>
                <div>
                    <span className={style.container1}>
                        <img onClick={() => setIsModalVisible(true)} src={foto}  alt="foto" />
                       {isModalVisible ? <Modal text="xablauuuuuuuu" onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto2} alt="foto2" />
                    </span>

                    <span>
                        <img src={foto3} alt="foto3" />
                    </span>

                    <span>
                        <img src={foto4} alt="foto4" />
                    </span>

                    <span>
                        <img src={foto5} alt="foto5" />
                    </span>

                    <span>
                        <img src={foto6} alt="foto6" />
                    </span>

                    <span>
                        <img src={foto7} alt="foto7" />
                    </span>

                    <span>
                        <img src={foto8} alt="foto8" />
                    </span>

                    <span>
                        <img src={foto9} alt="foto9" />
                    </span>

                    <span>
                        <img src={foto10} alt="foto10" />
                    </span>

                    <span>
                        <img src={foto11} alt="foto11" />
                    </span>

                    <span>
                        <img src={foto12} alt="foto12" />
                    </span>
                  
                </div>
               
            </section>
        </div>
    )
}

export default Galeria;