import { useEffect, useState } from 'react'
import { ScreenTypes } from 'src/enums/useWindowSize'
import { IWindowSize } from 'src/interfaces/IUseWindowSize'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
    screen: ScreenTypes.desktopL,
    scrollX: 0,
    scrollY: 0,
  })
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 0 && window.innerWidth <= 320) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.mobileS,
        })
      } else if (window.innerWidth > 320 && window.innerWidth <= 375) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.mobileM,
        })
      } else if (window.innerWidth > 375 && window.innerWidth <= 425) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.mobileL,
        })
      } else if (window.innerWidth > 425 && window.innerWidth <= 768) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.tablet,
        })
      } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.desktop,
        })
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.desktopL,
        })
      } else if (window.innerWidth > 1440 && window.innerWidth <= 2560) {
        setWindowSize({
          ...windowSize,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          width: window.innerWidth,
          height: window.innerHeight,
          screen: ScreenTypes.desktop4K,
        })
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize() // for first render

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default useWindowSize
