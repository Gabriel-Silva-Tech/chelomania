import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import "./produtos-individuais.css"
import Avaliacao from "../../assets/images/icone_estrelas.svg"
import Produto1 from '../../assets/images/chinelo_nuvem.svg'
import { useNavigate } from "react-router-dom" 


function ProdutosIndividuais( {addItem}){
      const navigate = useNavigate()
    return(
        <>
        <Header />
        <main className="container-produto"> 
             <figure className="produto">
             <div className="imagem-principal">
                <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
             </div>
             </figure>

             <section className="descricao-produto">
                 <p> Chinelos </p>
                 <h2>Chinelo Nuvem SoftStep Ultra</h2>

                 <div className="Avaliação-do-produto">
                    <img src={Avaliacao} alt="estrelas para avaliação do produto" />
                </div>
                    <div className="precos">
                        <div className="preco-linha-principal">
                            <p className="valor-original"> R$98,90 </p> 
                            <h2>R$ 89,99</h2>
                             <div className="icone-promocional">
                            <button> 25% OFF </button>
                        </div>
                    </div>
                            <p className="descricao-promocao"> em até 6x de R$ 14,98 sem juros </p>
                </div>
                <div className="tamanho-sessao">
                    <p className="subtitulo-tamanho"> <span>Tamanho:</span> </p>
                    <div className="tamanhos-produto">
                      <button>34</button>
                      <button>35</button>
                      <button>36</button>
                      <button>37</button>
                      <button>38</button>
                      <button>39</button>
                      <button>40</button>
                      <button>41</button>
                      <button>42</button>
                      <button>43</button>
                    </div>
                </div>
                 <div className="comprar-produto"> 
                    <button className="comprar"> Comprar</button>
                    <button className="adicionar-carrinho" onClick={() => { addItem({
                        id: 1,
                        name: "Chinelo Nuvem SoftStep Ultra",
                        price: 89.99,
                        image: Produto1,
                        qty: 1
                    })
                        navigate('/carrinho')
                        
                    }}>
                    
                     Adicionar à sacola
                    </button>

                 </div>
                    <div className="descricao-texto">
                        <p className="titulo-descricao"> Descrição</p>
                        <p> O toque de conforto que seus pés merecem. Desenvolvido com material em EVA de alta densidade, possui tecnologia antiderrapante, pisada macia e anatômica que alivia a pressão ao caminhar. Ideal para o dia a dia.</p>
                    </div>
                </section> 
            </main>
        <Footer />
         </>
    )
}

export default ProdutosIndividuais