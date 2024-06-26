import { useEffect, useState } from 'react'
import { IHandleError } from 'src/interfaces/IHandleError'
import Utils from 'bi-ui-utils-v2'

const useHandleError = (user: string, userLoginTime: number) => {
  const [isError, setIsError] = useState<boolean>(false)
  const [errorObject, setErrorObject] = useState<IHandleError>({
    colno: 0,
    lineno: 0,
    message: '',
    filename: '',
    errorMessage: '',
    screenHeight:  window.innerHeight,
    screenWidth:  window.innerWidth,
    screenScrollX:  window.scrollX,
    screenScrollY:  window.scrollY,
    browser: Utils.browserDetect(),
    location:  window.location.href,
    platform:  window.navigator.platform,
    browserLanguage:  window.navigator.language,
    networkSpeed: window.navigator?.connection?.effectiveType as any,
    cookieIsEnabled:  window.navigator.cookieEnabled,
    localStorage:  JSON.stringify({ ...localStorage }),
    sessionStorage: JSON.stringify({ ...sessionStorage }),
    cookies: JSON.stringify({ ...Utils.getCookies() as unknown as object }),
    machineRam:  window.navigator?.deviceMemory as any,
    permissions:  JSON.stringify(navigator.permissions),
    user: user,
    userLoginTime: userLoginTime,
  })

  useEffect(() => {
    addEventListener('error', (event) => {
      if (event.error.hasBeenCaught !== undefined) {
        return
      }
      event.error.hasBeenCaught = true
      setIsError(true)
      setErrorObject({
          colno: event.colno,
          lineno: event.lineno,
          message: event.message,
          filename: event.filename,
          errorMessage: event.error.message,
          screenHeight:  window.innerHeight,
          screenWidth:  window.innerWidth,
          screenScrollX:  window.scrollX,
          screenScrollY:  window.scrollY,
          browser: Utils.browserDetect(),
          location:  window.location.href,
          platform:  window.navigator.platform,
          browserLanguage:  window.navigator.language,
          networkSpeed: window.navigator?.connection?.effectiveType as any,
          cookieIsEnabled:  window.navigator.cookieEnabled,
          localStorage:  JSON.stringify({ ...localStorage }),
          sessionStorage: JSON.stringify({ ...sessionStorage }),
          cookies: JSON.stringify({ ...Utils.getCookies() as unknown as object  }),
          machineRam:  window.navigator?.deviceMemory as any,
          permissions:  JSON.stringify(navigator.permissions),
          user: user,
          userLoginTime: Date.now() - Number(userLoginTime || 0),
      })
    })
  }, [user, userLoginTime])

  if (isError) {
    return errorObject
  }
  return false
}

export default useHandleError
