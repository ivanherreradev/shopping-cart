import 'boxicons'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import styles from './styles.module.scss'

function Cart () {
  const [cartOpen, setCartOpen] = useState(true)
  const [productsLength, setProductsLength] = useState(0)
  const { cartItems } = useContext(CartContext)

  const handleOpenCart = () => {
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    )
  }, [cartItems])

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  )

  return (
    <div className={styles.cart}>
      <div onClick={handleOpenCart} className={styles.buttonCardContainer}>
        <div className={styles.buttonCard}>
          {!cartOpen
            ? (
            <box-icon
              name="cart"
              type="solid"
              size="md"
              color="#F0F0F0"
            ></box-icon>
              )
            : (
            <box-icon name="x" size="md" color="#F0F0F0"></box-icon>
              )}
        </div>
        {!cartOpen && (
          <span className={styles.productsNumber}>{productsLength}</span>
        )}
      </div>

      {cartItems && cartOpen && (
        <div className={styles.openCart}>
          <h2>Your Cart</h2>

          {cartItems.length === 0
            ? (
            <p className={styles.emptyCart}>Your cart is empty</p>
              )
            : (
            <div className={styles.productsContainer}>
              {cartItems.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </div>
              )}

          <h2 className={styles.total}>Total: ${total}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart
