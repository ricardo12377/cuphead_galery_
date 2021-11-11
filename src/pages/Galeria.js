
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
import {Component} from 'react'
import Form2 from '../components/form/Form2'

function Galeria () {

     const [isModalVisible, setIsModalVisible] = useState(false) 
     

    
     



    return(
        <div className={style.container}>
            <section className={style.lista}>
                <div>
                    <span className={style.container1}>
                        <img onClick={() => setIsModalVisible(true)} src={foto}  alt="foto" />
                       {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto2} onClick={() => setIsModalVisible(true)} alt="foto2" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto3}  onClick={() => setIsModalVisible(true)} alt="foto3" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto4}  onClick={() => setIsModalVisible(true)} alt="foto4" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto5}  onClick={() => setIsModalVisible(true)} alt="foto5" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto6}  onClick={() => setIsModalVisible(true)} alt="foto6" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto7}  onClick={() => setIsModalVisible(true)} alt="foto7" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto8}  onClick={() => setIsModalVisible(true)} alt="foto8" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto9}  onClick={() => setIsModalVisible(true)} alt="foto9" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto10}  onClick={() => setIsModalVisible(true)} alt="foto10" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto11}  onClick={() => setIsModalVisible(true)} alt="foto11" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>

                    <span>
                        <img src={foto12}  onClick={() => setIsModalVisible(true)} alt="foto12" />
                        {isModalVisible ? 
                       <Modal
                       title="Lorem ipsum" 
                       text="Lorem ipsum doipiscing elit. In eget suscipit purus, quis ultrices dui. Nam quis gravida tortor. Mauris at ipsum eleifend nisi iaculis suscipit. Vivamus et sem pellentesque dui vehicula lacinia q."
                       price="120" 
                       onClose={() => setIsModalVisible(false)} /> : null}
                    </span>
                  
                </div>
               
            </section>
        </div>
    )
}

export default Galeria;