import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import Banner from "../../assets/images/banner_home.svg"
import Produto1 from "../../assets/images/chinelo_nuvem.svg"
import Produto2 from "../../assets/images/conjunto_esportivo.svg"
import Produto3 from "../../assets/images/camiseta_preta.svg"
import Produto4 from "../../assets/images/chinelo_azul_marinho.svg"
import Produto5 from "../../assets/images/bolsa_esportiva.svg"
import Produto6 from "../../assets/images/calca_jeans.svg"
import espacoUnhas from "../../assets/images/espaco_unhas.svg"
import lurdes from "../../assets/images/lurdes_chelo_mania.svg"
import whatsapp from "../../assets/images/icone_whatsapp.svg"
import loja1 from "../../assets/images/loja_foto_1.svg"
import loja2 from "../../assets/images/loja_foto_2.svg"
import loja3 from "../../assets/images/loja_foto_3.svg"   
import { useNavigate } from "react-router-dom"

import "./home.css"
function Home(){
    
    const navigate = useNavigate()
    return(
    <>
        <Header />
        <main>
            <div className="banner-home">
                <img src={Banner} alt="banner da home" />
                <button className="Botao-banner"  onClick={() => navigate('/produtos')}> Veja mais produtos</button>
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
                <button className="botao-produto"  onClick={() => navigate('/produtos')}> Veja modelos </button>
            </section>
            <section className="espaco-unhas">
                <div>
                    <h2> Espaço para Unhas  <br /> e cuidado </h2>
                     <p> Um espaço criado com carinho para você relaxar e se cuidar. Manicure, pedicure e muito mais — tudo com atenção e capricho. </p>
                     <div className="btn-categorias">
                    <div className="sessao-1">
                         <button>Manicure</button> 
                         <button>Pedicure</button> 
                         <button>Cabelo</button> 
                    </div>
                    <div className="sessao-2">
                         <button>Spa dos pés</button> 
                         <button>Massagem</button> 
                    </div>

                    <div className="btn-agenda-horario">
                        <button button onClick={() => window.open('https://wa.me/551195409338')}>Agendar horário
                        <img className="icone_whats" src={whatsapp} alt="icone whatsapp"/></button>
                    </div>
                    </div>
                </div>
                <div className="img-espaco-unhas">
                    <img src={espacoUnhas} alt="imagem da area de espaço unhas"/>
                </div>
            </section>
            <section className="sobre-chelo-mania">
                <div className="texto-de-quem-somos">
                <h2> Sobre a <span> CheloMania  </span> </h2>
                <p>A Chelomania nasceu do sonho de Maria Lurdes, microempreendedora de Osasco que, com muito trabalho e dedicação, transformou sua história em um negócio com alma.
                Aqui você encontra mais do que um serviço: encontra conforto, confiança e amor-próprio.</p>
                </div>
                <div className="lurdes-dona-chelomania"> 
                        <img src={lurdes} alt="dona da chelomania" />
                </div>
            </section>
            <section className="sobre-loja">
            <div>
                <h2> Venha conhecer de perto!</h2>
             </div>
             <div className="imgs-loja"> 
                <img src={loja1} alt="dona da chelomania" />
                <img src={loja2} alt="dona da chelomania" /> 
                <img src={loja3} alt="dona da chelomania" /> 
             </div>
            </section>
            <section className="endereco">
             <h2> Nosso endereço </h2>
                <p> <span> Localização: </span>Rua Orlando Torres 439 - Jardim Conceição (Osasco)</p>
                <p> <span> CEP: </span> 06140055</p>
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.697202434289!2d-46.80469172592098!3d-23.579316162249714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5568dce341b9%3A0x4bea29cd835f8e1b!2sR.%20Orlando%20Torres%2C%20439%20-%20Conceicao%2C%20Osasco%20-%20SP%2C%2006140-055!5e0!3m2!1spt-BR!2sbr!4v1779941158567!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazyborder:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </section>
        </main>
         <Footer />
    </>
    )
}

export default Home