import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import "../login/login.css"
import "./cadastro.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Cadastro (){
    const navigate = useNavigate()
    return(
        <>
     <Header /> 
        <div className="pagina-login"> 
     <div className="card-login">
        <div className="container-login"> 
            <h2> Faça seu cadastro </h2>
            <p> Crie sua conta para continuar </p>
        </div>
        <div className="campo-cadastro-cadastro">
                <p>Nome</p>
            <input className="nome" placeholder="insira seu nome"></input>
                <p>Email</p>
            <input className="email" placeholder="insira sua email"></input>
                <p> Senha</p>
            <input className="senha" placeholder="insira sua senha"></input>
            <p> confirme sua senha </p>
            <input className="senha" placeholder="Confirme com sua senha"></input>
        </div>
        <div className="btn-continua">
            <button className="botao-continuar" onClick={() => navigate('/login')}>  Continuar  </button> 
        </div>
    </div>
</div>

<Footer />
  </>
    )
}
export default Cadastro