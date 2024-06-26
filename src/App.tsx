import { useRef, useState } from 'react'

import useLazyLoading from 'src/hooks/useLazyLoading'

const App = () => {
  const targetElementRef = useRef<any>()
  const onInfiniteScroll = useLazyLoading(targetElementRef)

  const [isFetching, setIsFetching] = useState(false)
  const generateRandomNo = () => Math.floor(Math.random() * 1000)
  const initialData = Array.from({ length: 40 }).map(generateRandomNo)
  const [data, setData] = useState(initialData)
  const fetchMock = (items = 10) => new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: items }).map(generateRandomNo)
      resolve(data)
    }, 1000)
  })
  onInfiniteScroll(() => {
    if (!isFetching) {
      setIsFetching(true)

      fetchMock()
        .then((next:any) => setData([...data, ...next]))
        .finally(() => setIsFetching(false))
    }
  })
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#C0C0C0', width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
        <div style={{ maxHeight: 250, overflow: 'scroll' }} ref={targetElementRef}>
          <div style={{ height: 500, position: 'relative' }}>

            <ul>
              {data.map((item:any) => (
                <li key={item}>mock item no: {item}</li>
              ))}
            </ul>
            {isFetching && (
              <div style={{ opacity: 0.6, textAlign: 'center', marginBottom: 20 }}>
                Loading next data...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
