const useSessionStorage = () => {
  const getSessionStorage = (key: string) => {
    return sessionStorage.getItem(key)
  }
  const setSessionStorage = (key: string, value: string | number) => {
    sessionStorage.setItem(key, value.toString())
  }
  const removeSessionStorage = (key: string) => {
    sessionStorage.removeItem(key)
  }
  const removeAllSessionStorage = () => {
    sessionStorage.clear()
  }
  return { getSessionStorage, setSessionStorage, removeSessionStorage, removeAllSessionStorage }
}
export default useSessionStorage
