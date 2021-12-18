import { useState, useEffect } from 'react'

const useMediaQuery = (minWidth) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isDesired, setIsDesired] = useState(false)

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth
      const isDesiredWidth = currentWindowWidth >= minWidth

      setWindowWidth(currentWindowWidth)
      setIsDesired(isDesiredWidth)
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [minWidth, windowWidth])

  return isDesired
}

export default useMediaQuery
