function StoreItems(props) {
  return (
    <li>
      <div class="store--item-icon">
        <img src={`/assets/icons/${props.id}.svg`} alt={props.name} />
      </div>
      <button>Add to cart</button>
    </li>
  )
}

export default StoreItems
