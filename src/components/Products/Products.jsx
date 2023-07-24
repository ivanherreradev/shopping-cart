import 'boxicons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductsData } from '../../data/Products'
import styles from './styles.module.scss'

function Products () {
  const { addItemToCart } = useContext(CartContext)
  return (
    <div className={styles.products}>
      {ProductsData.map((product) => {
        return (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} />
            <p>
              {product.name} - ${product.price}
            </p>
            <button onClick={() => addItemToCart(product)}>
              Add to cart <box-icon type="solid" name="cart-add" color="#F0F0F0"></box-icon>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Products
