import StoreItems from './StoreItems.js'

function Store(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {props.store.map(item => (
          <StoreItems
            key={item.id}
            name={item.name}
            id={item.id}
            addToCart={() => props.addToCart(item)}
          />
        ))}
      </ul>
    </header>
  )
}

export default Store
