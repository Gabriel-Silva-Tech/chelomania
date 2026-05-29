import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import { useState } from "react";
import "./suporte.css"
import rastrearpedido from "../../assets/images/acompanhe_entrega.svg"
import trocadevolucao from "../../assets/images/troca_devolucao.svg"
import atendimento from "../../assets/images/atendimento_humano.svg"


function Suporte(){
     const [aberto, setAberto] = useState(null);

    return(
        <>
        <Header />
        <section className="hero-suporte">
            <h1>Como podemos ajudar?</h1>
            <p>Encontre respostas rápidas ou fale com nossa equipe pelo WhatsApp.</p>
            <div className="barra-busca-suporte">
                <input placeholder="Buscar no central de ajuda" />
                <button>Buscar</button>
            </div>
        </section>

        <section className="cards-suporte">
            <div className="card-suporte">
                <div className="icone_rastrear_pedido">
                    <img src={rastrearpedido} alt="" />
                </div>
                <p> Rastrear pedido </p>
                <p>Acompanhe sua entrega</p>
            </div>
            <div className="card-suporte">
                <div className="icone_devolucao">
                    <img src={trocadevolucao} alt="" />
                </div>
                <p>Troca e devolução</p>
                <p>Política de 7 dias</p>
            </div>
            <div className="card-suporte">
             <div className="icone_devolucao">
                    <img src={atendimento} alt="" />
                </div>
                <p>Falar no whatsApp</p>
                <p>Atendimento Humano</p>
            </div>
        </section>

        <section className="faq">
            <h2>Perguntas frequentes</h2>
            <div className="faq-item" onClick={() => setAberto(aberto === 1 ? null : 1)}><p>Como rastrear meu pedido?</p>
                {aberto === 1 && <p className="faq-resposta">
                Após a confirmação do pedido, você receberá um email com o código de rastreio. Acesse o site dos Correios e insira o código para acompanhar sua entrega.</p>}
             </div>
            <div className="faq-item" onClick={() => setAberto(aberto === 2 ? null : 2)}><p>Qual o prazo de entrega para o minha cidade?</p>
             {aberto === 2 && <p className="faq-resposta">
                O prazo varia de 3 a 10 dias úteis dependendo da sua região. Após o envio, você receberá o código de rastreio por email.</p>}
            </div>
            <div className="faq-item" onClick={() => setAberto(aberto === 3 ? null : 3)}><p>Como faço uma troca ou devolução?</p>
             {aberto === 3 && <p className="faq-resposta">
               Você tem 7 dias após o recebimento para solicitar troca ou devolução. Entre em contato pelo WhatsApp com o número do pedido e o motivo.</p>}
            </div>
            <div className="faq-item" onClick={() => setAberto(aberto === 4 ? null : 4)}><p>Como agendar no Espaço Unhas?</p>
             {aberto === 4 && <p className="faq-resposta">
                
Clique no botão "Agendar horário" na página inicial ou entre em contato pelo WhatsApp. Nossa equipe confirmará o horário disponível.</p>}
            </div>
            <div className="faq-item" onClick={() => setAberto(aberto === 5 ? null : 5)}><p>Quais formas de pagamento são aceitas?</p>
             {aberto === 5 && <p className="faq-resposta">
                Aceitamos PIX, cartão de crédito (até 6x sem juros) e boleto bancário.</p>}
            </div>
        </section>

        <section className="cta-suporte">
            <h2>Não encontrou o que procurava?</h2>
            <p>Nossa equipe está pronta para te ajudar em até 2 horas.</p>
            <button>Falar com suporte</button>
        </section>
        <Footer />
        </>
    )
}
export default Suporte