import { createContext, useContext, useEffect, useRef, useState } from 'react'

const DashboardUIContext = createContext(null)

export default function DashboardUIContextProvider({ children }) {
  const [nav, _setNav] = useState(false)
  const [aside, _setAside] = useState(true)
  const [overlayScreen, _setOverlayScreen] = useState(false)
  const [darkMode, _setDarkMode] = useState(false)

  // Dark Mode
  const toggleDarkMode = () => _setDarkMode(!darkMode)
  const setDarkMode = (payload) => _setDarkMode(payload)

  // Overlay Screen
  const setOverlayScreen = (payload) => _setOverlayScreen(payload)

  // Nav
  const setNav = (payload = true) => {
    _setNav(payload)
    _setOverlayScreen(payload)
  }
  const toggleNav = () => setNav(!nav)
  const closeNav = () => {
    _setNav(false)
    _setOverlayScreen(false)
  }

  // Aside
  const setAside = (payload = true) => {
    _setAside(payload)
  }

  return (
    <DashboardUIContext.Provider
      value={{
        nav,
        darkMode,
        toggleDarkMode,
        setDarkMode,
        overlayScreen,
        closeNav,
        setOverlayScreen,
        toggleNav,
        setNav,
        aside,
        setAside
      }}
    >
      {children}
    </DashboardUIContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDashboardUI() {
  return useContext(DashboardUIContext)
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(DashboardUIContext)
  const [isLoad, setIsLoad] = useState(false)
  const getData = localStorage.getItem('DARK_MODE')
  const ref = useRef(false)

  const setToLocal = (payload) => {
    localStorage.setItem('DARK_MODE', JSON.stringify(payload))
  }

  useEffect(() => {
    if (!ref.current) {
      getData && typeof JSON.parse(getData) === 'boolean' ? setDarkMode(JSON.parse(getData)) : setToLocal(false)
      setIsLoad(true)
      return () => (ref.current = true)
    }
  }, [getData, setDarkMode])

  useEffect(() => {
    if (isLoad) {
      darkMode === true ? document.body.classList.add('dark') : document.body.classList.remove('dark')
      setToLocal(darkMode)
    }
  }, [darkMode])
}
