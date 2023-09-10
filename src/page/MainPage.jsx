import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fetchProducts } from "../store/MainStore.js";
import "../App.css";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      dispatch(addToCart(product));
    } else {
      alert("This product is already in the cart.");
    }
  };

  return (
    <div className="App">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.thumbnail}
              alt={product.title}
              className={"img"}
            />
            <h3>{product.title}</h3>
            <h5>{product.rating} &#9733;</h5>
            <p>{product.price} $</p>
            <button onClick={() => handleAddToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};
