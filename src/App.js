import './styles/reset.css'
import './styles/index.css'

// Import Components
import Store from './Store.js'
import Cart from './Cart.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

export default function App() {
  // Setup state here...
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  /* const addToCart = item => {
    const newCart = [...cart]
    if (isItemInCart(item)) {
      for (let i = 0; i < newCart.length; i++) {
        if (item === newCart[i].name) {
          newCart[i].quantity++
          setCart(newCart)
        }
      }
    } else {
      const newItem = createCartItem(item)
      setCart([...newCart, newItem])
    }
  }

  const isItemInCart = item => {
    for (let i = 0; i < cart.length; i++) {
      if (item === cart[i].name) {
        return true
      }
    }
  }

  const createCartItem = item => {
    for (let i = 0; i < store.length; i++) {
      if (item === store[i].name) {
        const newObject = { ...store[i], quantity: 1 }
        return newObject
      }
    }
  } */

  return (
    <>
      <Store store={store} />
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
