function CartItems(props) {
  return (
    <li>
      <img
        class="cart--item-icon"
        src={`assets/icons/${props.id}.svg`}
        alt={props.name}
      />
      <p>{props.name}</p>
      <button class="quantity-btn remove-btn center">-</button>
      <span class="quantity-text center">1</span>
      <button class="quantity-btn add-btn center">+</button>
    </li>
  )
}

export default CartItems
