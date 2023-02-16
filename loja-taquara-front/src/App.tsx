import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import {RouterProvider} from 'react-router-dom';
import router from './routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {


  

//1 - Criar uma função que agrupe as comidas em seus sabores (ex: todos os SALGADO em um array e todos os DOCE em outro array)
//2 - Criar uma função que agrupe as comidas saudáveis
//3 - Criar uma função que filtre apenas as comidas que tenham um valor abaixo de X
//4 - Criar um carrinho, esse carrinho deve conter um array com as comidas escolhidas e suas quantidades compradas
//5 - Criar uma função de adicionar ao carrinho, esse deve adicionar a comida específica ao carrinho e sua quantidade
//6 - Criar restrições na função de adicionar ao carrinho, este deve impossibilitar de adicionar ao carrinho uma quantidade que não exista ao produto (Ex: tem 1 almoço da sogra no estoque, não é possível adicionar dois almoços)
//7 - Criar a função comprar, esta deve calcular o valor total a se pagar
//8 - Adicionar restrições a compra, o comprador só poderá levar duas unidades de comidas não saudáveis (ex: dois chocolates ou uma paçoca e uma pizza de muzzarela)
//9 - Implementar a função de compra novamente, caso a compra passe dos cem reais, oferecer desconto de 5%, se a compra passar dos duzento reais, oferecer desconto de 10%
//10 - Produzir um site em React que utilize de todas as funções de maneira coerente

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <RouterProvider router={router} />
      </main>
      <Footer/>
    </div>
  )
}

export default App
