import style from './Footer.module.css'
import instagram from '../../img/instagram.jpg'
import twitter from '../../img/twitter.png'





function Footer () {

    return(
        <footer   className={style.footer}>
            <div className={style.instagram}>
            <ion-icon name="logo-instagram"></ion-icon> Instagram
            </div>

            <div className={style.twitter}>
            <ion-icon name="logo-twitter"></ion-icon> Twitter
            </div>

            <div>
            <ion-icon name="globe-outline"></ion-icon> Todos os direitos reservados.
            </div>
            

          
        </footer>
    )
}


export default Footer;