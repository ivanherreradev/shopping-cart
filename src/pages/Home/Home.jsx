import Products from '../../components/Products/Products'
import styles from './styles.module.scss'

function Home () {
  return (
    <div className={styles.home}>
      <Products />
    </div>
  )
}

export default Home
