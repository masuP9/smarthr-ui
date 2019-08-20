import * as React from 'react'
export interface Rect {
  top: number
  right: number
  bottom: number
  left: number
}
interface Props {
  offset?: {
    x?: number
    y?: number
  }
  children?: React.ReactNode
}
export declare const DropdownContent: (props: Props) => JSX.Element
export {}
