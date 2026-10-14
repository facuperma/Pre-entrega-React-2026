import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import formatPrice from '../utils/formatPrice'
import { useCart } from '../context/CartStore'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    let isCurrent = true
    fetch('/productos.json')
      .then((response) => {
        if (!response.ok) throw new Error('No se pudo cargar el producto.')
        return response.json()
      })
      .then((products) => {
        if (isCurrent) setProduct(products.find((item) => String(item.id) === id) || null)
      })
      .catch(() => { if (isCurrent) setError('No pudimos cargar este producto.') })
      .finally(() => { if (isCurrent) setLoading(false) })
    return () => { isCurrent = false }
  }, [id])

  if (loading) return <div className="wrap status-message">Cargando producto…</div>
  if (error || !product) return <div className="wrap status-message">{error || 'No encontramos ese producto.'} <Link to="/">Volver al catálogo</Link></div>

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2200)
  }

  return (
    <section className="detail-section wrap">
      <Link className="back-link" to="/">← Volver al catálogo</Link>
      <div className="detail-layout">
        <div className={`detail-art art-${product.tone}`}><span className="detail-emoji" aria-hidden="true">{product.emoji}</span><span className="art-caption">FERRETERÍA EL10 · {product.categoryLabel.toUpperCase()}</span></div>
        <div className="detail-copy">
          <p className="eyebrow">{product.categoryLabel} · CALIDAD PARA TU PROYECTO</p>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-spec"><span>Material</span><strong>{product.material}</strong></div>
          <div className="detail-spec"><span>Ideal para</span><strong>{product.use}</strong></div>
          <button className="button button-dark add-button" type="button" onClick={handleAdd}>{added ? 'Agregado al carrito ✓' : 'Agregar al carrito'} <span>↗</span></button>
          <p className="detail-note">Consultanos por disponibilidad · Atención de ferretería de barrio</p>
        </div>
      </div>
    </section>
  )
}
