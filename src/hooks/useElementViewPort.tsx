import { RefObject, useEffect, useState } from 'react'

const useElementViewPort = <T extends HTMLElement = HTMLElement>(valDetector: RefObject<T> | string | any) => {
  const [res, setRes] = useState<DOMRect | null>(null)
  useEffect(() => {
    const returnBoundingRect = async () => {
      const xx = valDetector?.current
      if (xx) {
        const result: DOMRect | null = await valDetector?.current?.getBoundingClientRect()
        setRes(result)
      }
      if (typeof valDetector === 'string') {
        const result: DOMRect | null = document?.getElementById(valDetector)?.getBoundingClientRect() || null
        setRes(result)
      }
    }

    returnBoundingRect()
  }, [valDetector])

  return res
}

export default useElementViewPort
