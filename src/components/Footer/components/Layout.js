import React from 'react'
import { Layout, useViewport } from '@1hive/1hive-ui'
import { GU } from '@1hive/1hive-ui'

// These breakpoints values represent minimum screen sizes.
export const BREAKPOINTS = {
  min: 360,
  small: 680,
  medium: 100 * GU,
  large: 175 * GU,
}

function CustomLayout({ children }) {
  const { width: vw } = useViewport()
  return (
    <Layout breakpoints={BREAKPOINTS} parentWidth={vw} paddingBottom={0}>
      {children}
    </Layout>
  )
}

export default CustomLayout
