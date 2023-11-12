
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ShopP from './pages/ShopP'
import ShopMR from './pages/ShopMR'
import ShopALM from './pages/ShopALM'
import ShopPL from './pages/ShopPL'
import ShopM from './pages/ShopM'
import ShopN from './pages/ShopN'
import WishListPage from './pages/WhishList'
import Carrito from './pages/Carrito'



function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop/procesadores' element={<ShopP/>}/>
          <Route path='/shop/memoriasram' element={<ShopMR/>}/>
          <Route path='/shop/almacenamiento' element={<ShopALM/>}/>
          <Route path='/shop/placasdevideo' element={<ShopPL/>}/>
          <Route path='/shop/monitores' element={<ShopM/>}/>
          <Route path='/shop/notebooks' element={<ShopN/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
