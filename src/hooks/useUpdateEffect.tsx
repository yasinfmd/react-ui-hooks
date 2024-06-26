import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useRef(true)
  const isFirstRender = () => {
    if (isFirst.current) {
      isFirst.current = false
      return true
    } else {
      return isFirst.current
    }
  }

  useEffect(() => {
    if (!isFirstRender()) {
      return effect()
    }
  }, deps)
}

export default useUpdateEffect
