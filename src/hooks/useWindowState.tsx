const useWindowState = () => {
  const getWindowState = (key: string) => {
    const res = (window as { [key: string]: any })[key] as string
    return res
  }
  const setWindowState = (key: string, value: string) => {
    ;(window as { [key: string]: any })[key] = value
  }
  const removeWindowState = (key: string) => {
    delete (window as { [key: string]: any })[key]
  }

  return { getWindowState, setWindowState, removeWindowState }
}
export default useWindowState
