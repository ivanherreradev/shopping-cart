import { CartProvider } from './context/CartContext'
import Home from './pages/Home/Home'

function App () {
  return (
    <CartProvider>
      <Home/>
    </CartProvider>
  )
}

export default App
