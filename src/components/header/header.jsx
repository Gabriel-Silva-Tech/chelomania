import { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import Logo from "../../assets/images/logo_chelo_mania.svg"
import Lupa from "../../assets/images/icone_lupa.svg"
import Bag from "../../assets/images/icone_bag.svg"
import Login from "../../assets/images/icone_login.svg"

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = () => {
    setMenuAberto(!menuAberto)
  }

  return (
    <header className="container-header">
      {}
      <Link to= "/">
      <div className="logo_chelomania">
        <img src={Logo} alt="logotipo da empresa Chelomania" />
      </div>
      </Link>

      {}
      <nav className={`container-nav ${menuAberto ? "menu-ativo" : ""}`}> 
        <Link to="/" onClick={() => setMenuAberto(false)}>Inicio</Link>
        <Link to="/produtos" onClick={() => setMenuAberto(false)}>Chinelos</Link>
        <Link to="/produtos" onClick={() => setMenuAberto(false)}>Vestuário</Link>
        <Link to="/produtos" onClick={() => setMenuAberto(false)}>Acessórios</Link>
        <Link to="/suporte" onClick={() => setMenuAberto(false)}>Suporte</Link>
      </nav>

      {}
      <div className="container-barra-pesquisa">
        <input className="barra-pesquisa" type="text" placeholder="Pesquise aqui: " />
        <img className="icone-lupa" src={Lupa} alt="lupa de pesquisa" />
      </div>

      {}
      <div className="container-bag-e-login">
        <Link to="/carrinho"><img src={Bag} alt="icone de carrinho" /></Link>
        <Link to="/login"><img src={Login} alt="icone de login" /></Link>

        {}
        <button className={`menu-sanduiche ${menuAberto ? "aberto" : ""}`} onClick={toggleMenu}>
          <span className="linha"></span>
          <span className="linha"></span>
          <span className="linha"></span>
        </button>
      </div>
    </header>
  )
}

export default Header