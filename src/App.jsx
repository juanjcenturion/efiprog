
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import ShopP from './pages/ShopP'
import ShopMR from './pages/ShopMR'
import ShopALM from './pages/ShopALM'
import ShopPL from './pages/ShopPL'
import ShopM from './pages/ShopM'
import ShopN from './pages/ShopN'
import WishListPage from './pages/WhishList'
import Carrito from './pages/Carrito'
import Account from './pages/Account'
import Footer from './components/footer/Footer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductsPage from './pages/ProductsPage'
import ConfirmationPage from './pages/ConfirmationPage'



function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop/procesadores' element={<ShopP/>}/>
          <Route path='/shop/memoriasram' element={<ShopMR/>}/>
          <Route path='/shop/almacenamiento' element={<ShopALM/>}/>
          <Route path='/shop/placasdevideo' element={<ShopPL/>}/>
          <Route path='/shop/monitores' element={<ShopM/>}/>
          <Route path='/shop/notebooks' element={<ShopN/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/confirmation' element={<ConfirmationPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
