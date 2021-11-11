import style from './Footer.module.css'
import instagram from '../../img/instagram.jpg'
import twitter from '../../img/twitter.png'




function Footer () {

    return(
        <footer   className={style.footer}>
            <div className={style.instagram}>
             <img src={instagram} /> <span>Instagram</span>
            </div>

            <div className={style.twitter}>
                <img src={twitter} /> <span>Twitter</span>
            </div>
        </footer>
    )
}


export default Footer;