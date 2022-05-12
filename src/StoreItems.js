function StoreItems(props) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${props.id}.svg`} alt={props.name} />
      </div>
      <button onClick={props.addToCart}>Add to cart</button>
    </li>
  )
}

export default StoreItems
