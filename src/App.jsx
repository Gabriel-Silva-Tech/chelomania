import { BrowserRouter, Routes, Route} from "react-router-dom" 
import {useState} from "react"

import Home from "./pages/home/home.jsx"
import Produtos from "./pages/produtos/produtos.jsx"
import Carrinho from "./pages/carrinho/carrinho.jsx"
import ProdutosIndividuais from "./pages/produtos-individuais/produtos-individuais.jsx"
import Login from "./pages/login/login.jsx"
import Cadastro from "./pages/cadastro/cadastro.jsx"
import EsqueciSenha from "./pages/esqueci-senha/esqueci-senha.jsx"
import Suporte from "./pages/suporte/suporte.jsx"

function App (){

    const [cart, setCart] = useState ([])
    const addItem = (produto) => {
        setCart([...cart, produto])
 }

    const removeItem = (id) => {
        setCart([...cart.filter((item) => item.id !== id)])

    }

    const updateQty = (id, qty) => {
        setCart(cart.map((item) => {
            if (item.id === id) {
                return {...item, qty: qty}
            }

            return item 
        }))
    } 

  return(

    <BrowserRouter>  
      <Routes> 
      <Route path = "/" element={<Home />} />
      <Route path = "/produtos" element={<Produtos addItem={addItem}/>} />
      <Route path = "/produtos-individuais" element = {<ProdutosIndividuais addItem={addItem} />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/cadastro" element={<Cadastro />} />
      <Route path = "/esqueci-senha" element={<EsqueciSenha />} />
      <Route path = "/suporte" element={<Suporte />} />
      <Route path = "/carrinho" element={<Carrinho cart={cart} removeItem={removeItem} updateQty={updateQty}/>} /> 
      </Routes>
    </BrowserRouter>

  )
}

export default App 