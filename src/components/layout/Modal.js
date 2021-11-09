import style from './Modal.module.css'
import { icons } from 'react-icons';

function Modal  ({text, onClose = () => {}})  {



    return(
        <div className={style.modal} onClick={onClose}>
          <div className={style.container}>
              <h1>Foto</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et neque massa. Proin iaculis mauris elit, ut sagittis purus finibus nec. Integer risus felis, gravida eu odio in, finibus vulputate dui. Sed fringilla eros eu orci auctor aliquet. Proin volutpat eros eu imperdiet porta. Quisque et dapibus nisl.  </p>
              <p>asdasdas</p>
              
          </div>
        </div>

    )
}


export default Modal;