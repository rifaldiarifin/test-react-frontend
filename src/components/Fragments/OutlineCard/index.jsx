import { predictClass } from '../../../utils/predictClass'
import CircleLoader from '../../Elements/CircleLoader'
import styles from './outlineCard.module.css'

const OutlineCard = ({ children, className }) => {
  return <div className={`${styles.outline_card}${predictClass(() => className, className)}`}>{children}</div>
}

const CardPreloader = () => {
  return (
    <div className={styles.outline_card_preloader}>
      <CircleLoader size="medium" />
    </div>
  )
}

const Header = ({ children, className }) => {
  return <div className={`${styles.outline_card__header}${predictClass(() => className, className)}`}>{children}</div>
}

const Body = ({ children, className }) => {
  return <div className={`${styles.outline_card__body}${predictClass(() => className, className)}`}>{children}</div>
}

const Title = ({ title = '' }) => {
  return <p className={styles.outline_card__title}>{title}</p>
}

const Title2 = ({ title = '' }) => {
  return <p className={styles.outline_card__title2}>{title}</p>
}

OutlineCard.CardPreloader = CardPreloader
OutlineCard.Header = Header
OutlineCard.Body = Body
OutlineCard.Title = Title
OutlineCard.Title2 = Title2

export default OutlineCard
