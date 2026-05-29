import Header from '../../components/header/header.jsx'
import Footer from "../../components/footer/footer.jsx"
import { useNavigate } from 'react-router-dom'
import Produto1 from '../../assets/images/chinelo_nuvem.svg'
import Produto2 from '../../assets/images/conjunto_esportivo.svg'
import Produto3 from '../../assets/images/camiseta_preta.svg'
import Produto4 from '../../assets/images/chinelo_azul_marinho.svg'
import Produto5 from '../../assets/images/bolsa_esportiva.svg'
import Produto6 from '../../assets/images/calca_jeans.svg'
import Produto7 from '../../assets/images/colar_ouro.svg'
import Produto8 from '../../assets/images/conjunto_esportivo_verde.svg'
import Produto9 from '../../assets/images/calca_preta.svg'
import Produto10 from '../../assets/images/chinelo_laranja.svg'
import Produto11 from '../../assets/images/camiseta_branca.svg'

import './produtos.css'

function Produtos(){

    const navigate = useNavigate()

    return(
        <>
        <Header /> 
        <main>
        <nav className="categorias"> 
            <button> Todos os produtos </button>
            <button> Chinelos </button>
            <button> Vestuário </button>
            <button> Acessórios </button>
        </nav>
    <div className="container-pagina-produtos">
        <aside className="filtro">
            <h3> Filtro </h3>
        <div className="filtro-tamanho">
            <p> <span> Tamanho </span> </p>
            <div className="tamanhos">
                 <button>34</button>
                 <button>35</button>
                 <button>36</button>
                 <button>37</button>
                 <button>38</button>
                 <button>39</button>
                 <button>40</button>
                 <button>41</button>
                 <button>42</button>
                 <button>PP</button>
                 <button>P</button>
                 <button>M</button>
                 <button>G</button>
                 <button>GG</button>
            </div>
        </div>
        
            <div className="filtro-cor">
                <p> <span> Cor </span></p>
                <div className="cores">
                    <button className="cor-branca" style={{backgroundColor: "white"}}></button>
                    <button className="cor" style={{backgroundColor: "black"}}></button>
                    <button className="cor" style={{backgroundColor: "#5271FF"}}></button>
                    <button className="cor" style={{backgroundColor: "orange"}}></button>
                    <button className="cor" style={{backgroundColor: "red"}}></button>
                    <button className="cor" style={{backgroundColor: "gold"}}></button>
                </div>
            </div>
            <div className="filtro-preco">
                <p> <span> Faixa de preço </span></p>
                <input className="cor-faixa-preco" type="range" min="0" max="300" />
            </div>
        </aside>
    <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>                    
        <img src={Produto1} alt="Chinelo Nuvem SoftStep Ultra"/>
        <p>Chinelo Nuvem SoftStep Ultra</p>
        <p className="preco">R$ 89,90</p>
    </div>
    <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto2} alt="Conjunto Fitness Active Laranja"/>
        <p>Conjunto Fitness Active Laranja</p>
        <p className="preco">R$ 159,90</p>
    </div>
    <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto3} alt="Camiseta preta lisa"/>
        <p>Camiseta Básica Comfort Preta</p>
        <p className="preco"> R$ 59,90</p>
    </div>
    <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
         <img src={Produto4} alt="Chinelo Slim Azul Marinho"/>
         <p>Chinelo Slim Azul Marinho</p>
         <p className="preco"> R$ 49,90</p>
    </div>
    <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto5} alt="Bolsa Esportiva Gym "/>
        <p>Bolsa Esportiva Gym </p>
        <p className="preco"> R$ 149,90</p>
    </div>
    <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto6} alt="Camiseta preta lisa"/>
        <p>Calça Jeans Skinny Flex</p>
        <p className="preco"> R$ 119,90</p>
     </div>
     <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto7} alt="Mix de Pulseiras Folheadas Gold"/>
        <p>Mix de Pulseiras Folheadas Gold</p>
        <p className="preco"> R$ 119,90</p>
     </div>
     <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto8} alt="Camiseta preta lisa"/>
        <p>Conjunto Esportivo Verde</p>
        <p className="preco"> R$ 119,90</p>
     </div>
     <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto9} alt="Camiseta preta lisa"/>
        <p>Calça Preta Elegance</p>
        <p className="preco"> R$ 119,90</p>
     </div>
     <div className="card-produto" onClick={() => navigate('/produtos-individuais')} >
        <img src={Produto10} alt="Camiseta preta lisa"/>
        <p>Chinelo Laranja Vibrant</p>
        <p className="preco"> R$ 119,90</p>
     </div>
     <div className="card-produto" onClick={() => navigate('/produtos-individuais')}>
        <img src={Produto11} alt="Camiseta preta lisa"/>
        <p>Camiseta Branca Classic</p>
        <p className="preco"> R$ 119,90</p>
     </div>
    </div>
        </main>

 <Footer />
         </>
    )
}
export default Produtos