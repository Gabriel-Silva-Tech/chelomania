import './carrinho.css'
import Header from "../../components/header/header.jsx"
import whatsapp from "../../assets/images/icone_whatsapp.svg"

function Carrinho({ cart, removeItem,updateQty }){
    const finalizarPedido = () => {
    const mensagem = cart.map(item => 
        `${item.qty}x ${item.name} - R$ ${item.price}`
    ).join('\n')
    
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    
    const texto = `Olá! Quero comprar:\n${mensagem}\n\nTotal: R$ ${total}`
    
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`)
}
    
    return(
        <>
        <Header />
            <main className="container-carrinho">
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
                            <button ClassName="btn-ok"> Ok </button>
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
                            <p> Frete grátis a partir de R$ 199,00</p>
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
            </main>
        </>
    )
}

export default Carrinho