import { useState, useEffect } from 'react'

const useUserTimeOut = (SECOND: number) => {
  const eventsArr: string[] = ['keydown', 'scroll', 'mousemove', 'click']
  let timerVar = 0
  const [isUserPassive, setIsUserPassive] = useState<string | null>('')
  const startTimer = () => {
    const isUserPassive = localStorage.getItem('isUserPassive')
    if (isUserPassive !== '0') {
      localStorage.setItem('isUserPassive', '0')
    }
    timerVar = window.setTimeout(() => {
      localStorage.setItem('isUserPassive', '1')
      window.dispatchEvent(new Event('isUserPassiveChanged'))
      // ^^^^ isPassive değerini dışarıdan  dinleyebilmek için
    }, 1000 * SECOND)
  }
  const isUserPassiveChanged = () => {
    window.addEventListener('isUserPassiveChanged', () => {
      setIsUserPassive(localStorage.getItem('isUserPassive'))
    })
  }
  const handleUserAction = () => {
    if (timerVar) {
      clearTimeout(timerVar)
    }
    startTimer()
  }
  useEffect(() => {
    eventsArr?.forEach((element: string) => {
      window.addEventListener(
        element,
        function () {
          handleUserAction()
        },
        true
      )
    })

    isUserPassiveChanged()
    //default değeri localstorageden state e çekmek için
    startTimer()
    // sayfa açıldığında hareketsiz kalmayı takip etmek için
  }, [])

  return {
    isUserPassive,
  }
}
export default useUserTimeOut
