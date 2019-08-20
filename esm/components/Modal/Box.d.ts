import * as React from 'react'
interface Props {
  active: boolean
  top?: number
  right?: number
  bottom?: number
  left?: number
  hideModal?: () => void
  children?: React.ReactNode
}
export declare const Box: (props: Props) => JSX.Element
export {}
