import { useState, useEffect } from 'react'
import Utils from 'bi-ui-utils-v2'

const useSessionExpiredLogout = (token: string) => {
  let timerVar = 0
  const [isExpiredSession, setIsExpiredSession] = useState<boolean>(false)

  const startTimer = (idleTime: number) => {
    timerVar = window.setTimeout(() => {
      setIsExpiredSession(true)
    }, idleTime)
  }

  const startToExpireDate = (idleTime: number) => {
    if (timerVar) {
      clearTimeout(timerVar)
      setIsExpiredSession(false)
    }
    startTimer(idleTime)
  }

  useEffect(() => {
    if (token) {
      const decodedJwt: any = Utils.parseJWT(token)
      if (decodedJwt !== false) {
        const { exp } = decodedJwt
        const expDateSeconds = new Date(exp).getTime() * 1000
        const now = new Date().getTime()
        const differenceMilisecondsT = Utils.differenceMiliseconds(now, expDateSeconds)
        if (token && differenceMilisecondsT && differenceMilisecondsT > 0) {
          startToExpireDate(differenceMilisecondsT)
        }
      } else {
        setIsExpiredSession(false)
      }
    }
  }, [token])

  return {
    isExpiredSession,
  }
}
export default useSessionExpiredLogout
