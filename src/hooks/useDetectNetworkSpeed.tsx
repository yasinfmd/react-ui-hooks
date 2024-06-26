import { useEffect, useState } from 'react'
import { INetworkInformation } from 'src/interfaces/INetworkInformation'

function useDetectNetworkSpeed() {
  const [res, setRes] = useState<INetworkInformation | null>()
  useEffect(() => {
    const handleOnChange = (target: INetworkInformation | null) => {
      setRes(target)
    }

    // typescript navigator altında connection objesi içermediği için  devDependenciye bu paket eklenmeli
    // eklenirse Network. diye cagırılmalı
    // yada ignore edilmeli
    // https://stackoverflow.com/questions/38383676/error-ts2339-property-connection-does-not-exist-on-type-navigator

    //@ts-ignore
    navigator?.connection?.addEventListener('change', (e: any) => {
      handleOnChange(e?.target)
    })
  }, [])
  return res
}

export default useDetectNetworkSpeed
