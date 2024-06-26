export interface IHandleError {
    colno: number
    lineno: number
    message: string
    filename: string
    errorMessage: string
    screenHeight: number
    screenWidth: number
    screenScrollX: number
    screenScrollY: number
    browser: string
    location: string
    platform: string
    browserLanguage: string
    networkSpeed: string
    localStorage: string
    sessionStorage: string
    cookies: string
    cookieIsEnabled: boolean
    machineRam: string | number
    permissions: string
    user: string
    userLoginTime: string | number
}

declare global {
    interface Navigator {
      connection: {
        effectiveType: string
      }
      deviceMemory: string
    }
  }