import { predictClass } from '../../../utils/predictClass'
import CircleLoader from '../../Elements/CircleLoader'
import styles from './card.module.css'

const Card = ({ children, className = null }) => {
  return <div className={`${styles.card}${predictClass(() => className, className)}`}>{children}</div>
}

const CardPreloader = () => {
  return (
    <div className={styles.card_preloader}>
      <CircleLoader size="medium" />
    </div>
  )
}

const Header = ({ children, className = null }) => {
  return <div className={`${styles.card__header}${predictClass(() => className, className)}`}>{children}</div>
}

const Panel = ({ children, className = null }) => {
  return <div className={`${styles.card__panel}${predictClass(() => className, className)}`}>{children}</div>
}

const GridLayouts = ({ templateColms = null, className, children }) => {
  return (
    <div
      className={`${styles.grid_layouts}${predictClass(() => className, className)}`}
      style={{ '--template-colms': templateColms }}
    >
      {children}
    </div>
  )
}

const SeparatorY = () => {
  return <span className={styles.card__separator_y}></span>
}

const SeparatorX = () => {
  return <span className={styles.card__separator_x}></span>
}

const Title = ({ title }) => {
  return <p className={styles.card__title}>{title}</p>
}

const Title2 = ({ title }) => {
  return <p className={styles.card__title2}>{title}</p>
}

Card.CardPreloader = CardPreloader
Card.Header = Header
Card.Panel = Panel
Card.GridLayouts = GridLayouts
Card.SeparatorX = SeparatorX
Card.SeparatorY = SeparatorY
Card.Title = Title
Card.Title2 = Title2

export default Card
