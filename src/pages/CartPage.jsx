import { Link } from 'react-router-dom'
import formatPrice from '../utils/formatPrice'
import { useCart } from '../context/CartStore'

export default function CartPage() {
  const { cart, total, changeQuantity, removeFromCart, clearCart } = useCart()

  return (
    <section className="cart-section wrap">
      <p className="eyebrow">FERRETERÍA EL10 · TU PEDIDO</p>
      <h1>Tu carrito<span>.</span></h1>
      {!cart.length ? (
        <div className="empty-cart"><span className="empty-icon" aria-hidden="true">🧰</span><h2>Tu caja de herramientas está vacía</h2><p>Elegí lo que necesitás y poné en marcha tu próximo proyecto.</p><Link className="button button-dark" to="/">Ver herramientas <span>↗</span></Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(({ product, quantity }) => (
              <article className="cart-row" key={product.id}>
                <Link className={`cart-thumb art-${product.tone}`} to={`/producto/${product.id}`}><span aria-hidden="true">{product.emoji}</span></Link>
                <div className="cart-product"><p className="product-category">{product.categoryLabel}</p><h2><Link to={`/producto/${product.id}`}>{product.name}</Link></h2><span>{formatPrice(product.price)}</span></div>
                <div className="quantity-control" aria-label={`Cantidad de ${product.name}`}><button type="button" onClick={() => changeQuantity(product.id, -1)} aria-label="Disminuir cantidad">−</button><span>{quantity}</span><button type="button" onClick={() => changeQuantity(product.id, 1)} aria-label="Aumentar cantidad">+</button></div>
                <strong className="line-total">{formatPrice(product.price * quantity)}</strong>
                <button className="remove-button" type="button" onClick={() => removeFromCart(product.id)} aria-label={`Quitar ${product.name}`}>×</button>
              </article>
            ))}
            <button className="clear-cart" type="button" onClick={clearCart}>Vaciar carrito</button>
          </div>
          <aside className="order-summary"><p className="eyebrow">RESUMEN DEL PEDIDO</p><div className="summary-row"><span>Subtotal</span><span>{formatPrice(total)}</span></div><div className="summary-row"><span>Envío</span><span>A coordinar</span></div><div className="summary-total"><span>Total</span><strong>{formatPrice(total)}</strong></div><button className="button button-dark checkout-button" type="button" onClick={() => window.alert('¡Gracias por elegir FerreteríaEl10! Esta tienda de demostración no procesa pagos.')}>Finalizar pedido <span>↗</span></button><p className="checkout-note">Los costos de envío se calculan al confirmar tu pedido.</p></aside>
        </div>
      )}
    </section>
  )
}
