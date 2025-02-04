import * as React from 'react'
import * as C from '@/constants'

const Crypto = React.lazy(async () => import('.'))

const getOptions = () => (C.isMobile ? {title: 'Crypto'} : {title: 'Crypto tools'})

const Screen = () => (
  <React.Suspense>
    <Crypto />
  </React.Suspense>
)

const Page = {getOptions, getScreen: () => Screen, skipShim: !C.isMobile}
export default Page
