import Cart from '../../components/Cart/Cart'
import Products from '../../components/Products/Products'
import styles from './styles.module.scss'

function Home () {
  return (
    <div className={styles.home}>
      <Cart />
      <Products />
    </div>
  )
}

export default Home
