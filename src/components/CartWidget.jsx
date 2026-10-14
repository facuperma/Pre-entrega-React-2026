import { Link } from 'react-router-dom'
import { useCart } from '../context/CartStore'

export default function CartWidget() {
  const { itemCount } = useCart()

  return (
    <Link className="cart-widget" to="/carrito" aria-label={`Carrito, ${itemCount} productos`}>
      <span aria-hidden="true">🛒</span>
      <span className="cart-label">Carrito</span>
      <span className="cart-count">{itemCount}</span>
    </Link>
  )
}
