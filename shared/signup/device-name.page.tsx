import * as React from 'react'

const Name = React.lazy(async () => import('./device-name'))

const getOptions = () => ({})

const Screen = () => (
  <React.Suspense>
    <Name />
  </React.Suspense>
)

const Page = {getOptions, getScreen: () => Screen}
export default Page
