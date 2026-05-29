import "./footer.css"
import Logo from "../../assets/images/logo_chelo_mania.svg"
import instagram from "../../assets/images/icone_instagram.svg"
import facebook from "../../assets/images/icone_facebook.svg"
import whatsapp from "../../assets/images/icone_footer_whatsapp.svg"
import { Link } from "react-router-dom"


function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Logo} alt="Chelomania" />
                    <p>Moda, conforto e cuidado <br /> num só lugar. Para você e <br /> para quem você ama. </p>
                </div>
                <div className="footer-coluna">
                    <h4>Plataforma</h4>
                    <a href="/">Inicio</a>
                    <a href="#">Quem somos</a>
                    <a href="/produtos">Produtos</a>
                    <Link to="/">Espaço Unhas</Link>
                </div>
                <div className="footer-coluna">
                    <h4>Ajuda e suporte</h4>
                    <Link to="/suporte">Suporte</Link>
                    <Link to="/suporte">Troca e devoluções</Link>
                    <Link to="/suporte">Perguntas frequentes (FAQ)</Link>
                </div>
                <div className="footer-coluna">
                    <h4>Redes sociais</h4>
                    <div className="footer-redes">
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={whatsapp} alt="WhatsApp" /></a>
                    </div>
                </div>
            </div>
            <p className="footer-copy">© 2025 Chelomania. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer