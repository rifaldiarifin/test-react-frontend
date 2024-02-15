import { Link } from 'react-router-dom'
import styles from './navLinkGroup.module.css'
import { predictClass } from '../../../utils/predictClass'
import usePathName from '../../../hooks/usePathName'

const NavLinkGroup = ({ children }) => {
  return <div className={styles.navlinks}>{children}</div>
}

const NavLink = ({ to = '#', ariaLabel = 'Nav Link', children, onClick = () => {} }) => {
  const { urlNavLinkMatch } = usePathName()
  const checkUrl = urlNavLinkMatch(to, 0)
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={`${styles.navlinks__link}${predictClass(() => checkUrl, styles.link_active)}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

const IconClass = () => styles.navlinks__link__icon

NavLinkGroup.NavLink = NavLink
NavLinkGroup.IconClass = IconClass

export default NavLinkGroup
