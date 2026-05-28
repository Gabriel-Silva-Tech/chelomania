import Header from "../../components/header/header.jsx"
import "./produtos-individuais.css"
import Avaliacao from "../../assets/images/icone_estrelas.svg"
import Produto1 from '../../assets/images/chinelo_nuvem.svg'
import { useNavigate } from "react-router-dom" 


function ProdutosIndividuais( {addItem}){
      const navigate = useNavigate()
    return(
        <>
        <Header />
        <main> 
             <figure className="produto">
                <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
                <div className="img-posicoes-produto"> 
                    <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
                    <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
                    <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
                </div>
             </figure>
             <section className="descricao-produto">
                 <p> Chinelos </p>
                 <h2>Chinelo Nuvem SoftStep Ultra</h2>
                 <div className="Avaliação-do-produto">
                    <img src={Avaliacao} alt="" />
                 <p className="valor-original"> R$98,90  </p> 
                <h2>R$ 89,99</h2>
                <div className="icone-promocional">
                    <p> 25% OFF </p>
                </div>
                <p className="descricao-promocao"> em até 6x de R$ 14,98 sem juros </p>
                </div>
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
             </section>
             <section className="descricao-texto">
                <p className="titulo-descricao"> Descrição</p>
                <p> O toque de conforto que seus pés merecem. Desenvolvido com material em EVA de alta densidade, possui tecnologia antiderrapante, pisada macia e anatômica que alivia a pressão ao caminhar. Ideal para o dia a dia.</p>
             </section>
        </main>
         </>
    )
}

export default ProdutosIndividuais