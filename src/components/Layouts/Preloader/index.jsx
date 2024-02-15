import CircleLoader from '../../Elements/CircleLoader'
import styles from './preloader.module.css'

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <CircleLoader size="large" />
    </div>
  )
}
