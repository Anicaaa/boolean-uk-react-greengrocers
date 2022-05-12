import './styles/reset.css'
import './styles/index.css'

// Import Components
import Store from './Store.js'
import Cart from './Cart.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

export default function App() {
  // Setup state here...
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  function addToCart(item) {
    const findItemCart = cart.find(checkItem => checkItem.id === item.id)
    if (!findItemCart) {
      const newItem = { ...item, quantity: 1 }
      setCart([...cart, newItem])
    }
  }

  return (
    <>
      <Store store={store} addToCart={addToCart} />
      <Cart cart={cart} />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
