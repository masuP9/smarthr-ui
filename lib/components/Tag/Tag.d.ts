/// <reference types="react" />
declare type Type = 'success' | 'warning' | 'error' | 'require'
interface Props {
  skeleton?: boolean
  type?: Type
  children: string
}
export declare const Tag: (props: Props) => JSX.Element
export {}
