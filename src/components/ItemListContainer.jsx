import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

const categoryNames = {
  herramientas: 'Herramientas',
  pintureria: 'Pinturería',
  electricidad: 'Electricidad',
  plomeria: 'Plomería',
}

export default function ItemListContainer() {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isCurrent = true
    fetch('/productos.json')
      .then((response) => {
        if (!response.ok) throw new Error('No pudimos cargar el catálogo.')
        return response.json()
      })
      .then((data) => { if (isCurrent) setProducts(data) })
      .catch(() => { if (isCurrent) setError('No pudimos cargar los productos. Volvé a intentarlo.') })
      .finally(() => { if (isCurrent) setLoading(false) })
    return () => { isCurrent = false }
  }, [])

  const visibleProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products
  const title = categoryId ? categoryNames[categoryId] || 'Catálogo' : 'Todo para meterle mano'

  return (
    <section className="catalog-section wrap">
      <div className="catalog-intro">
        <p className="eyebrow">FERRETERÍAEL10 · LA PASIÓN TAMBIÉN SE CONSTRUYE</p>
        <h1>{title}<span>.</span></h1>
        <p className="catalog-description">Herramientas, pinturas y materiales para tus proyectos. Con la garra y la pasión de Diego Armando Maradona, cada arreglo puede convertirse en una jugada maestra.</p>
        <div className="catalog-meta"><span>{loading ? 'Cargando productos…' : `${visibleProducts.length} productos disponibles`}</span><span className="meta-rule" /><span>Asesoramiento de barrio · Calidad argentina</span></div>
      </div>

      {loading ? (
        <div className="status-message" role="status">Preparando las herramientas…</div>
      ) : error ? (
        <div className="status-message error-message" role="alert">{error}</div>
      ) : visibleProducts.length ? (
        <div className="product-grid">{visibleProducts.map((product) => <Item key={product.id} product={product} />)}</div>
      ) : (
        <div className="status-message">Todavía no hay productos en esta categoría.</div>
      )}
    </section>
  )
}
