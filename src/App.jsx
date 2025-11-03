
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layout/RootLayout'
import Home from './components/pages/Home'
import ShopDetails from './components/pages/ShopDetails'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/shopDetails' element={<ShopDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
