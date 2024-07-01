import { CartProvider } from "./contexts/CartContext"
import MainLayout from "./layouts/MainLayout"



function App() {


  return (
    <CartProvider>
      <div className="font-KumbhSans min-h-svh">
        <MainLayout />
      </div>
    </CartProvider>
  )
}

export default App
