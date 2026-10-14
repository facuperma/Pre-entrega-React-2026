import { Link } from 'react-router-dom'
import formatPrice from '../utils/formatPrice'

export default function Item({ product }) {
  return (
    <article className="product-card">
      <Link className={`product-art art-${product.tone}`} to={`/producto/${product.id}`} aria-label={`Ver ${product.name}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-emoji" aria-hidden="true">{product.emoji}</span>
        <span className="art-caption">FERRETERÍA EL10 · {product.categoryLabel.toUpperCase()}</span>
      </Link>
      <div className="product-info">
        <div><p className="product-category">{product.categoryLabel}</p><h3><Link to={`/producto/${product.id}`}>{product.name}</Link></h3></div>
        <span className="product-price">{formatPrice(product.price)}</span>
      </div>
      <Link className="quick-link" to={`/producto/${product.id}`}>Ver producto <span aria-hidden="true">↗</span></Link>
    </article>
  )
}
