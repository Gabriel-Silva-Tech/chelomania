import "../login/login.css"
import Header from '../../components/header/header.jsx'


function Login(){
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
                <p> Email</p>
            <input className="email" placeholder="insira sua email"></input>
                <p> Senha</p>
            <input className="senha" placeholder="insira sua senha"></input>
            <p> Esqueceu sua senha? Recupere</p>
        </div>
        <div className="btn-continua">
            <button className="botao-continuar"> Continuar</button> 
            <p> Não tem conta? então Cadastre-se </p>
        </div>
    </div>
</div>
        </>
    )
}
export default Login