import { useEffect, useRef } from 'react'

export const useDocumentTitle = (subTitle = '', title = 'Test React App') => {
  if (!title) throw new Error('"Title" argument cannot be empty!')
  if (typeof title !== 'string') throw new Error('"Title" must be a string!')
  const ref = useRef(false)
  useEffect(() => {
    if (!ref.current) {
      subTitle.length > 0 ? (document.title = `${subTitle} - ${title}`) : (document.title = title)
      return () => (ref.current = true)
    }
  }, [title])
}
