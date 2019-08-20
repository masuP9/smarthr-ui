/// <reference types="react" />
interface Props {
  total: number
  current: number
  onClick: (pageNumber: number) => void
  padding?: number
  className?: string
}
export declare const Pagination: (props: Props) => JSX.Element
export {}
