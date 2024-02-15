import { Link } from 'react-router-dom'
import styles from './hyperlink.module.css'

const Hyperlink = ({ to = '#', size = '', type = 'hyperlink', children, ariaLabel = 'My Link' }) => {
  const switchSize = () => {
    switch (size) {
      case 'medium':
        return ` ${styles.hyperlink_medium}`

      default:
        return ''
    }
  }

  if (type === 'link') {
    return (
      <a href={to} className={`${styles.hyperlink}${switchSize()}`} aria-label={ariaLabel}>
        {children}
      </a>
    )
  } else {
    return (
      <Link to={to} className={`${styles.hyperlink}${switchSize()}`} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
}

Hyperlink.IconClass = styles.hyperlink__icon
export default Hyperlink
