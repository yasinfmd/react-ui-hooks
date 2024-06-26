import { useState, useEffect, useCallback } from 'react'
import { IOptions, ICookieStore } from 'src/interfaces/IUseCookie'
const useCookie = (key: string, options?: IOptions) => {
  const [cookieValue, setCookieValue] = useState<string>()
  const cookieStoreObject = (window as any).cookieStore as ICookieStore

  const onError = (err: Error) => {
    console.log('useCookie has Error', { err })
  }

  useEffect(() => {
    const getInitialValue = async () => {
      try {
        const getFunctionResult = await cookieStoreObject.get(key)

        if (getFunctionResult?.value) {
          return setCookieValue(getFunctionResult.value)
        }

        await cookieStoreObject.set({
          name: key,
          value: options?.defaultValue,
          ...options,
        })
        return setCookieValue(options?.defaultValue)
      } catch (err: any) {
        return onError(err)
      }
    }
    getInitialValue()
  }, [])

  const updateCookie = useCallback(
    (newValue: string) =>
      cookieStoreObject
        .set({ name: key, value: newValue, ...options })
        .then(() => setCookieValue(newValue))
        .catch(onError),
    []
  )

  const deleteCookie = useCallback(
    () =>
      cookieStoreObject
        .delete({ name: key, ...options })
        .then(() => setCookieValue(undefined))
        .catch(onError),
    []
  )

  return {
    cookieValue,
    updateCookie,
    deleteCookie,
  }
}
export default useCookie
