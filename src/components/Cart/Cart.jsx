import 'boxicons'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import styles from './styles.module.scss'

function Cart () {
  const [cartOpen, setCartOpen] = useState(false)
  const [productsLength, setProductsLength] = useState(0)
  const { cartItems } = useContext(CartContext)

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
      <div className={styles.buttonCardContainer}>
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
            <box-icon name="x"></box-icon>
              )}
        </div>
        {!cartOpen && (
          <span className={styles.productsNumber}>{productsLength}</span>
        )}
      </div>
    </div>
  )
}

export default Cart
