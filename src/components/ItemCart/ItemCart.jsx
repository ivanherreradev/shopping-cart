import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import styles from './styles.module.scss'

function ItemCart ({ item }) {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { deleteItemToCart, addItemToCart } = useContext(CartContext)

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => addItemToCart(item)}>
              ADD
            </button>
            <button onClick={() => deleteItemToCart(item)}>
              REMOVE
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
