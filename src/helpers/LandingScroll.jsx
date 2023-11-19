import { useState, useEffect } from 'react'

const useScroll = (threshold) => {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setTriggered(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return triggered
}

export default useScroll
