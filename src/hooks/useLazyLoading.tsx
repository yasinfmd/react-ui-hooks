import { RefObject, useCallback , useRef,useEffect} from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (functionToCheck: unknown): functionToCheck is Function => !!(
  typeof functionToCheck === 'function'
  && !!functionToCheck.constructor
  && !!functionToCheck.call
  && !!functionToCheck.apply
)


const safeHasOwnProperty = (obj: any, prop: string): boolean => (obj ? Object.prototype.hasOwnProperty.call(obj, prop) : false)

 interface SomeCallback<TArgs, TResult = void> {
  (...args: TArgs[]): TResult
}
 interface CallbackSetter<TArgs> {
  (nextCallback: SomeCallback<TArgs>): void
}

const createHandlerSetter = <TArgs, TResult = void>(callback?: SomeCallback<TArgs, TResult>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlerRef = useRef(callback)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setHandler = useRef((nextCallback: SomeCallback<TArgs, TResult>) => {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function')
    }

    handlerRef.current = nextCallback
  })

  return [handlerRef, setHandler.current] as [RefObject<SomeCallback<TArgs, TResult>>, CallbackSetter<TArgs>]
}


const useEvent = <TEvent extends Event, TElement extends HTMLElement = HTMLElement>
(ref: RefObject<TElement>, eventName: string, options?: AddEventListenerOptions) => {
  const [handler, setHandler] = createHandlerSetter<TEvent>()

  if (!!ref && !safeHasOwnProperty(ref, 'current')) {
    throw new Error('Unable to assign any scroll event to the given ref')
  }

  useEffect(() => {
    // @ts-ignore
    const cb: EventListenerOrEventListenerObject = (event: TEvent) => {
      if (handler.current) {
        handler.current(event)
      }
    }

    if (ref.current && ref.current.addEventListener && handler.current) {
      ref.current.addEventListener(eventName, cb, options)
    }

    return () => {
      // @ts-ignore
      if (ref.current && ref.current.addEventListener && handler.current) {
        ref.current.removeEventListener(eventName, cb, options)
      }
    }
  }, [eventName, ref.current, options])

  return setHandler
}

const useLazyLoading = <TElement extends HTMLElement>(ref: RefObject<TElement>, delay = 250) => {
  const onScroll = useEvent<UIEvent, TElement>(ref, 'scroll', { passive: true })
  const [onScrollEnd, setOnScrollEnd] = createHandlerSetter<void>()

  if (ref && !safeHasOwnProperty(ref, 'current')) {
    throw new Error('Unable to assign any scroll event to the given ref')
  }

  const handleScroll = useCallback(({ target }: UIEvent) => {
    const el = target as HTMLDivElement
    if (el) {
      const isBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 1
      if (isBottom && isFunction(onScrollEnd?.current)) {
        setTimeout(onScrollEnd.current, delay)
      }
    }
  }, [])

  onScroll(handleScroll)

  return setOnScrollEnd
}

export default useLazyLoading
