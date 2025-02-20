import CartItems from './CartItems'

function Cart(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.cart.map(item => (
            <CartItems
              key={item.id}
              name={item.name}
              id={item.id}
              quantity={item.quantity}
              increaseQuantity={() => props.increaseQuantity(item)}
              decreaseQuantity={() => props.decreaseQuantity(item)}
            />
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
  )
}

export default Cart
