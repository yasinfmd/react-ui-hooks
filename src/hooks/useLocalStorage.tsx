const useLocalStorage = () => {
  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
  }
  const setLocalStorage = (key: string, value: string | number) => {
    localStorage.setItem(key, value.toString())
  }
  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
  }
  const removeAllLocalStorage = () => {
    localStorage.clear()
  }
  return { getLocalStorage, setLocalStorage, removeLocalStorage, removeAllLocalStorage }
}
export default useLocalStorage
