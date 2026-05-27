import "./header.css"
import Logo from "../../assets/images/logo_chelo_mania.svg"
import Lupa from "../../assets/images/icone_lupa.svg"
import Bag from "../../assets/images/icone_bag.svg"
import Login from "../../assets/images/icone_login.svg"
function Header (){

    return(
    
        <header className="container-header">
            <div className="logo_chelomania">
                <img src={Logo} alt="logotipo da empresa Chelomania"/>
            </div>
            <nav className="container-nav"> 
                <a>Inicio</a>
                <a>Chinelos</a>
                <a>Vestuário</a>
                <a>Acessórios</a>
            </nav>
            <div className="container-barra-pesquisa">
                <input className="barra-pesquisa" type="text" placeholder="Pesquise aqui: "/>
                <img className="icone-lupa" src={Lupa} alt="lupa de pesquisa"/>
            </div>
            <div className="container-bag-e-login">
                <img src={Bag} alt="icone de carrinho"/>
                <img src={Login} alt="icone de login"/>
            </div>
        </header>
    )
}

export default Header