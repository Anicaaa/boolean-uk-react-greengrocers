function CartItems(props) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${props.id}.svg`}
        alt={props.name}
      />
      <p>{props.name}</p>
      <button
        onClick={props.decreaseQuantity}
        className="quantity-btn remove-btn center"
      >
        -
      </button>
      <span className="quantity-text center">{props.quantity}</span>
      <button
        onClick={props.increaseQuantity}
        className="quantity-btn add-btn center"
      >
        +
      </button>
    </li>
  )
}

export default CartItems
