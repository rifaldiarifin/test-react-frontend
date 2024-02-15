import * as Feather from 'react-feather'
import { useDarkMode, useDashboardUI } from '../../../contexts/useDashboardUIContext'
import { predictClass } from '../../../utils/predictClass'
import Button from '../../Elements/Button'
import styles from './dashboardUI.module.css'

/**
 * Main Container Dashboard UI
 */

const DashboardUI = ({ children }) => {
  const { setNav, overlayScreen } = useDashboardUI()
  useDarkMode()

  return (
    <div className={styles.dashboard_ui}>
      <div className={styles.dashboard_ui__layouts}>
        {children}
        {overlayScreen && <div className={styles.dashboard_ui__overlayscreen} onClick={() => setNav(false)}></div>}
      </div>
    </div>
  )
}

// #################################################

/**
 * DashboardUI > Nav ###############################
 */
const Nav = ({ isActive = false, children }) => {
  return (
    <div className={`${styles.dashboard_ui__layouts__nav}${predictClass(() => isActive, styles.nav_responsive)}`}>
      {children}
    </div>
  )
}
const NavHeader = ({ children }) => {
  return <div className={styles.dashboard_ui__layouts__nav__header}>{children}</div>
}

const NavBody = ({ children }) => {
  return <div className={styles.dashboard_ui__layouts__nav__body}>{children}</div>
}

const NavBodyNavLinks = ({ children }) => {
  return <div className={styles.dashboard_ui__layouts__nav__navlinks}>{children}</div>
}

const NavFooter = ({ children }) => {
  return <div className={styles.dashboard_ui__layouts__nav__footer}>{children}</div>
}

DashboardUI.Nav = Nav
DashboardUI.Nav.Header = NavHeader
DashboardUI.Nav.Body = NavBody
DashboardUI.Nav.Body.NavLinks = NavBodyNavLinks
DashboardUI.Nav.Footer = NavFooter

/**
 * DashboardUI > NavResponsive ###############################
 */

const NavResponsive = ({ children }) => {
  const { nav, toggleNav } = useDashboardUI()
  return (
    <div className={`${styles.dashboard_ui__nav_responsive} w-screen`}>
      <div className={`${styles.dashboard_ui__nav_responsive__w_cnt} w-cnt`}>
        <div></div>
        <div>
          {children}
          <Button
            color="transparent"
            icon={
              nav ? (
                <Feather.X width={'20px'} height={'20px'} className={Button.IconClass} />
              ) : (
                <Feather.Menu width={'20px'} height={'20px'} className={Button.IconClass} />
              )
            }
            onClick={toggleNav}
            iconOnly
            className={'menu full-rounded'}
          />
        </div>
      </div>
    </div>
  )
}

DashboardUI.NavResponsive = NavResponsive

/**
 * DashboardUI > Main ###############################
 */
const Main = ({ children }) => {
  return <div className={`${styles.dashboard_ui__layouts__main}`}>{children}</div>
}
const MainHeader = ({ children }) => {
  return (
    <div className={`${styles.dashboard_ui__layouts__main__header} w-screen`}>
      <div className={`${styles.dashboard_ui__layouts__main__header__w_cnt} w-cnt`}>{children}</div>
    </div>
  )
}
const MainBody = ({ children }) => {
  return (
    <div className={`${styles.dashboard_ui__layouts__main__body} w-screen`}>
      <div className={`${styles.dashboard_ui__layouts__main__body__w_cnt} w-cnt`}>{children}</div>
    </div>
  )
}
const MainBodyDashboard = ({ children }) => {
  return <div className={styles.dashboard_ui__layouts__main__body__dashboard}>{children}</div>
}

DashboardUI.Main = Main
DashboardUI.Main.Header = MainHeader
DashboardUI.Main.Body = MainBody
DashboardUI.Main.Body.Dashboard = MainBodyDashboard

/**
 * DashboardUI > Aside ###############################
 */
const Aside = ({ children }) => {
  return <div className={styles.dashboard_ui__layouts__aside}>{children}</div>
}

DashboardUI.Aside = Aside

/**
 * Components
 */

const Title = ({ title = 'Hello World' }) => {
  return <h1 className={styles.dashboard_ui__layouts__main__header__title}>{title}</h1>
}
DashboardUI.Title = Title

const TitleParag = ({ text = "Let's make some magic here!" }) => {
  return <p className={styles.dashboard_ui__layouts__main__header__p}>{text}</p>
}
DashboardUI.TitleParag = TitleParag

const GridLayouts = ({ templateColms = null, className = null, children }) => {
  return (
    <div
      className={`${styles.grid_layouts}${predictClass(() => className, className)}`}
      style={{ '--template-colms': templateColms }}
    >
      {children}
    </div>
  )
}
DashboardUI.GridLayouts = GridLayouts

DashboardUI.styles = styles

export default DashboardUI
