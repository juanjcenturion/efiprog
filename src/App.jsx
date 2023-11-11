
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ShopP from './pages/ShopP'
import WishListPage from './pages/WhishList'


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
          <Route path='/wishlist' element={<WishListPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
