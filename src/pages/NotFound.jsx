import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="not-found wrap"><p className="eyebrow">404 · PÁGINA NO ENCONTRADA</p><h1>Nos fuimos por otro camino<span>.</span></h1><Link className="button button-dark" to="/">Volver al inicio <span>↗</span></Link></section>
}
