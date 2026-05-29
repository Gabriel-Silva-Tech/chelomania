import "../login/login.css"
import Header from '../../components/header/header.jsx'
import Footer from "../../components/footer/footer.jsx"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(){

    const navigate = useNavigate()

    return(
        
        <>
        <Header /> 
<div className="pagina-login"> 
     <div className="card-login">
        <div className="container-login"> 
            <h2> Seja bem vindo(a) </h2>
            <p> Entre em sua conta novamente </p>
        </div>
        <div className="campo-email-e-senha">
                <p className="info"> Email</p>
            <input className="email" placeholder="insira sua email"></input>
                <p className="info"> Senha</p>
            <input className="senha" placeholder="insira sua senha"></input>
            <p> Esqueceu sua senha? <Link to="/esqueci-senha">Recupere</Link></p>
        </div>
        <div className="btn-continua">
            <button className="botao-continuar" onClick={() => navigate('/')}> Continuar</button> 
            <p> Não tem conta? então <Link to="/cadastro">Cadastre-se</Link></p>
        </div>
    </div>
</div>
 <Footer />
        </>
    )
}
export default Login