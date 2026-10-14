import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const categories = [
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'pintureria', label: 'Pinturería' },
  { id: 'electricidad', label: 'Electricidad' },
  { id: 'plomeria', label: 'Plomería' },
]

export default function NavBar() {
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      <div className="nav-links">
        <NavLink to="/" end>Todo el catálogo</NavLink>
        {categories.map((category) => (
          <NavLink key={category.id} to={`/categoria/${category.id}`}>
            {category.label}
          </NavLink>
        ))}
      </div>
      <CartWidget />
    </nav>
  )
}
