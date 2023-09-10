import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div>
      <header>
        <div>cart: {cart.length}</div>
        <NavLink to={'/'}>Main</NavLink>
        {' / '}
        <NavLink to={'/cart'}>Cart</NavLink>
      </header>
      <Outlet />
      <footer>

      </footer>
    </div>
  )
}