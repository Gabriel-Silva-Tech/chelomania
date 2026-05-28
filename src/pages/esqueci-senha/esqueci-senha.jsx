import Header from '../../components/header/header.jsx'

function EsqueciSenha(){
    return(
        <>
        <Header /> 
        <div className="pagina-login"> 
     <div className="card-login">
        <div className="container-login"> 
            <h2> Recupere sua senha </h2>
            <p> Digite seu email </p>
        </div>
        <div className="campo-email-e-senha">
                <p> Email</p>
            <input className="email" placeholder="insira sua email"></input>
                <p> Senha</p>
        </div>
        <div className="btn-continua">
            <button className="botao-continuar"> Enviar </button> 
            <p> Lembrou sua senha? Voltar</p>
        </div>
    </div>
</div>
        </>
    )
}
export default EsqueciSenha 