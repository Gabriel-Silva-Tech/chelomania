import Header from "../../components/header/header.jsx"
import Banner from "../../assets/images/banner_home.svg"
import Produto1 from "../../assets/images/chinelo_nuvem.svg"
import Produto2 from "../../assets/images/conjunto_esportivo.svg"
import Produto3 from "../../assets/images/camiseta_preta.svg"
import Produto4 from "../../assets/images/chinelo_azul_marinho.svg"
import Produto5 from "../../assets/images/bolsa_esportiva.svg"
import Produto6 from "../../assets/images/calca_jeans.svg"
import "./home.css"
function Home(){
    return(
    <>
        <Header />
        <main className="container-home">
            <div className="banner-home">
                <img src={Banner} alt="banner da home"/>
                <button className="Botao-banner"> Veja mais produtos</button>
            </div>
            <section className="secao-produtos">
                <h1>Produtos em <span>destaque</span></h1>
                <div className="container-produtos1"> 
                    <div className="card-produto">
                        <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
                        <p>Chinelo Nuvem SoftStep Ultra</p>
                        <p className="preco">R$ 89,90</p>
                    </div>
                     <div className="card-produto">
                        <img src={Produto2} alt="Conjunto Fitness Active Laranja"/>
                        <p>Conjunto Fitness Active Laranja</p>
                        <p className="preco">R$ 159,90</p>
                    </div>
                     <div className="card-produto">
                        <img src={Produto3} alt="Camiseta preta lisa"/>
                        <p>Camiseta Básica Comfort Preta</p>
                        <p className="preco"> R$ 59,90</p>
                    </div>
                </div>
                 <div className="container-produtos2"> 
                      <div className="card-produto">
                        <img src={Produto4} alt="Chinelo Slim Azul Marinho"/>
                        <p>Chinelo Slim Azul Marinho</p>
                        <p className="preco"> R$ 49,90</p>
                    </div>
                      <div className="card-produto">
                        <img src={Produto5} alt="Bolsa Esportiva Gym "/>
                        <p>Bolsa Esportiva Gym </p>
                        <p className="preco"> R$ 149,90</p>
                    </div>
                     <div className="card-produto">
                        <img src={Produto6} alt="Camiseta preta lisa"/>
                        <p>Calça Jeans Skinny Flex</p>
                        <p className="preco"> R$ 119,90</p>
                    </div>
                </div>
                <div className="container-produtos2"> 
                </div>
                <button className="botao-produto"> Veja modelos </button>
            </section>
            <section className="espaco-unhas">
            </section>
            <section className="sobre-chelo-mania">
            </section>
            <section className="sobre-loja">
            </section>
            <section className="endereco">
            </section>
            
        </main>
    </>
    )
}

export default Home