import * as Feather from 'react-feather'
import DashboardUI from '../../components/Fragments/DashboardUI'
import CompanyLogo from '../../components/Elements/CompanyLogo'
import Button from '../../components/Elements/Button'
import NavLinkGroup from '../../components/Fragments/NavLinkGroup'
import UserProfile from '../../components/Fragments/UserProfile'
import logo from '/vite.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import NotificationsPage from './NotificationsPage'
import TimesPage from './TimesPage'
import GroupsPage from './GroupsPage'
import WalletPage from './WalletPage'
import SettingsPage from './SettingsPage'
import { useDashboardUI } from '../../contexts/useDashboardUIContext'
import useAutoExpandNavigation from '../../hooks/useAutoExpandNavigation'

export default function Dashboard() {
  const { nav, closeNav, aside, darkMode, toggleDarkMode, setAside, setNav } = useDashboardUI()
  useAutoExpandNavigation({ setAside, setNav })
  return (
    <DashboardUI>
      <DashboardUI.Nav isActive={nav}>
        <DashboardUI.Nav.Header>
          <CompanyLogo src={logo} alt="Vite" className={'mrgn-b-30'} />
          <Button
            color="second"
            icon={<Feather.MessageSquare className={Button.IconClass} />}
            className={'full-rounded'}
            iconOnly
            ariaLabel="Chats"
          />
        </DashboardUI.Nav.Header>

        <DashboardUI.Nav.Body>
          <NavLinkGroup>
            <NavLinkGroup.NavLink to="/" ariaLabel="Dashboard" onClick={closeNav}>
              <Feather.Home className={NavLinkGroup.IconClass()} />
            </NavLinkGroup.NavLink>
            <NavLinkGroup.NavLink to="/notifications" ariaLabel="Notifications" onClick={closeNav}>
              <Feather.Bell className={NavLinkGroup.IconClass()} />
            </NavLinkGroup.NavLink>
            <NavLinkGroup.NavLink to="/times" ariaLabel="Times" onClick={closeNav}>
              <Feather.Clock className={NavLinkGroup.IconClass()} />
            </NavLinkGroup.NavLink>
            <NavLinkGroup.NavLink to="/groups" ariaLabel="Groups" onClick={closeNav}>
              <Feather.Users className={NavLinkGroup.IconClass()} />
            </NavLinkGroup.NavLink>
            <NavLinkGroup.NavLink to="/wallet" ariaLabel="Wallet" onClick={closeNav}>
              <Feather.CreditCard className={NavLinkGroup.IconClass()} />
            </NavLinkGroup.NavLink>
            <NavLinkGroup.NavLink to="/settings" ariaLabel="Settings" onClick={closeNav}>
              <Feather.Settings className={NavLinkGroup.IconClass()} />
            </NavLinkGroup.NavLink>
          </NavLinkGroup>
        </DashboardUI.Nav.Body>

        <DashboardUI.Nav.Footer>
          <UserProfile src="/common/avatar1.png" />
          <Button
            // style='regular'
            color="classic"
            icon={
              darkMode ? <Feather.Moon className={Button.IconClass} /> : <Feather.Sun className={Button.IconClass} />
            }
            className={'full-rounded'}
            ariaLabel="Chats"
            onClick={toggleDarkMode}
            iconOnly
          />
        </DashboardUI.Nav.Footer>
      </DashboardUI.Nav>

      <DashboardUI.NavResponsive />

      <DashboardUI.Main>
        <Routes>
          <Route path="/" element={<DashboardPage aside={aside} />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/times" element={<TimesPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </DashboardUI.Main>

      {/* {aside && } */}
    </DashboardUI>
  )
}
