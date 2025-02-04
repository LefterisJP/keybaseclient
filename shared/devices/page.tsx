import * as React from 'react'
import * as C from '@/constants'
import {HeaderTitle, HeaderRightActions} from './nav-header'

const Index = React.lazy(async () => import('.'))

const getOptions = () =>
  C.isMobile
    ? {title: 'Devices'}
    : {
        headerRightActions: HeaderRightActions,
        headerTitle: HeaderTitle,
        title: 'Devices',
      }

const Screen = () => (
  <React.Suspense>
    <Index />
  </React.Suspense>
)

const Page = {getOptions, getScreen: () => Screen}
export default Page
