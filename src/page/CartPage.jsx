import {useSelector} from "react-redux";


export const CartPage = () => {
  const cart = useSelector(state => state.cart)


  return (
    <div className={'product-list'}>
      {cart.map((product) => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt={product.name} className={'img'}/>
          <h3>{product.title}</h3>
          <h5>{product.rating}&#9733;</h5>
          <p>{product.price} $</p>
        </div>
      ))}
    </div>
  )
}