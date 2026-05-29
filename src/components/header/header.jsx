import "./header.css"
import Logo from "../../assets/images/logo_chelo_mania.svg"
import Lupa from "../../assets/images/icone_lupa.svg"
import Bag from "../../assets/images/icone_bag.svg"
import Login from "../../assets/images/icone_login.svg"
import { Link } from "react-router-dom"
function Header (){

    return(
    
        <header className="container-header">
            <div className="logo_chelomania">
                <img src={Logo} alt="logotipo da empresa Chelomania"/>
            </div>
            <nav className="container-nav"> 
                  <Link to="/">Inicio</Link>
                  <Link to="/produtos">Chinelos</Link>
                  <Link to="/produtos">Vestuário</Link>
                  <Link to="/produtos">Acessórios</Link>
            </nav>
            <div className="container-barra-pesquisa">
                <input className="barra-pesquisa" type="text" placeholder="Pesquise aqui: "/>
                <img className="icone-lupa" src={Lupa} alt="lupa de pesquisa"/>
            </div>
            <div className="container-bag-e-login">
                <Link to="/carrinho"><img src={Bag} alt="icone de carrinho"/></Link>
                <Link to="/login"><img src={Login} alt="icone de login"/></Link>
            </div>
        </header>
    )
}

export default Header