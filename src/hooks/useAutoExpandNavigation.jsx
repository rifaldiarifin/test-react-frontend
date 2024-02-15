import { useEffect, useRef } from 'react'

const useAutoExpandNavigation = ({ setAside, setNav }) => {
  const ref = useRef(false)

  useEffect(() => {
    if (!ref.current) {
      window.screen.width > 1360 ? setAside(true) : setAside(false)

      return () => (ref.current = true)
    }
  })

  useEffect(() => {
    const handleResizeWindow = () => {
      // set aside
      window.screen.width > 1360 ? setAside(true) : setAside(false)

      // set nav
      window.screen.width > 500 ? setNav(false) : null
    }

    // event listener resize for handleResizeWindow
    window.addEventListener('resize', handleResizeWindow)

    // clear event listener
    return () => window.removeEventListener('resize', handleResizeWindow)
  }, [])
}

export default useAutoExpandNavigation
