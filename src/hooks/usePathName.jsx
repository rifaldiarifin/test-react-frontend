import { useEffect, useState } from 'react'
import { useResolvedPath } from 'react-router-dom'

const usePathName = () => {
  const [pathName, setPathName] = useState(false)
  const path = useResolvedPath()

  const urlNavLinkMatch = (url, index) => {
    return `/${pathName[index]}` === url
  }

  useEffect(() => {
    const urlPath = path.pathname.split('/')
    setPathName(urlPath.splice(1, urlPath.length - 1))
  }, [path])

  return { pathName, urlNavLinkMatch }
}

export default usePathName
