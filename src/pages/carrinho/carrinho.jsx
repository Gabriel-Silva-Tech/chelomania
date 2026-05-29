import './carrinho.css'
import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import bagazul from "../../assets/images/bag_azul.svg"
import whatsapp from "../../assets/images/icone_whatsapp.svg"
import baglaranja from "../../assets/images/bag_laranja.svg"

function Carrinho({ cart, removeItem,updateQty }){
    const finalizarPedido = () => {
    const mensagem = cart.map(item => 
        `${item.qty}x ${item.name} - R$ ${item.price}`
    ).join('\n')
    
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    
    const texto = `Olá! Quero comprar:\n${mensagem}\n\nTotal: R$ ${total}`
    
    window.open(`https://wa.me/5511954093386?text=${encodeURIComponent(texto)}`)
}
    
    return(
        <>
        <Header />
            <main className="container-carrinho">
            {cart.length === 0 ? (
                <div className="carrinho-vazio">
                    <div className="carrinho-vazio-icones">
                        <img src={bagazul} alt="bag azul" />
                        <img src={baglaranja} alt="bag laranja" />
                    </div>
                    <h2>Sua sacola está vazia</h2>
                    <p>Explore nossos produtos e encontre algo que você vai amar!</p>
                    <button className="botao-continuar" onClick={() => window.location.href='/produtos'}>
                        Ver produtos
                    </button>
                </div>
            ) : (
                <>
                <section className="pagina-carrinho">
                    {cart.map((item) => (
                        <div className="item-carrinho" key={item.id}>
                            <img src={item.image} alt={item.name}/>
                        <div className="desc-item">
                            <p> {item.name} </p>
                            <p> tamanho: {item.size}</p> 
                        </div>
                        <p className="preco-produto"> R$ {item.price} </p>
                        <div className="quantidade">
                            <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                            <span> {item.qty}</span>
                            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)}> Remover </button>
                        </div>
                    ))}
                </section>
                <aside className="Resumo-pedido"> 
                    <h2> Resumo do pedido </h2>
                        <div className="campo-calc-cep">
                            <input className="barra-de-calc" placeholder="Calcular frete CEP" />
                            <button className="btn-ok"> Ok </button>
                        </div>
                        <div className="valores">
                            <div className="linha-valor">
                                <p> Subtotal </p>
                                <p> R$ 159,90 </p>
                            </div>
                            <div className="linha-valor">
                                <p> Frete </p>
                                <p> R$ 19,90 </p>
                            </div>
                            <p> Entrega para todo o Brasil </p>
                            <hr /> 
                        </div>

                        <div className="valor-total-e-compra">
                          <div className= "linha-total">
                            <h2> total: </h2>
                             <p className="valor"> R$ {cart.reduce ((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</p>
                          </div>
                             <button className="btn-whatsapp" onClick={finalizarPedido}> 
                         Finalize pelo WhatsApp
                                <img src={whatsapp} alt />
                            </button>
                    <p className="pagamento"> Pagamento 100% seguro · PIX · Cartão · Boleto</p>
                        </div>
                </aside>
                </>
            )}
            </main>
            <Footer />
        </>
    )
}

export default Carrinho