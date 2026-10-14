import { useState } from 'react'
import { CartContext } from './CartStore'
const STORAGE_KEY = 'ferreteria-el10-cart'

function readStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readStoredCart)

  function updateCart(updater) {
    setCart((current) => {
      const next = updater(current)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  function addToCart(product, quantity = 1) {
    updateCart((current) => {
      const existing = current.find((entry) => entry.product.id === product.id)
      if (existing) {
        return current.map((entry) =>
          entry.product.id === product.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        )
      }
      return [...current, { product, quantity }]
    })
  }

  function removeFromCart(productId) {
    updateCart((current) => current.filter((entry) => entry.product.id !== productId))
  }

  function changeQuantity(productId, amount) {
    updateCart((current) =>
      current
        .map((entry) =>
          entry.product.id === productId
            ? { ...entry, quantity: entry.quantity + amount }
            : entry,
        )
        .filter((entry) => entry.quantity > 0),
    )
  }

  function clearCart() {
    updateCart(() => [])
  }

  const itemCount = cart.reduce((total, entry) => total + entry.quantity, 0)
  const total = cart.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0)
  const value = { cart, itemCount, total, addToCart, removeFromCart, changeQuantity, clearCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

