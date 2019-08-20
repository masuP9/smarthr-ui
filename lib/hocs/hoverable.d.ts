import * as React from 'react'
export interface ExternalProps {
  className?: string
  onMouseEnter?: (e: any) => void
  onMouseLeave?: (e: any) => void
  onTouchStart?: (e: any) => void
  onTouchEnd?: (e: any) => void
}
export interface InjectedProps {
  className: string
  onMouseEnter: (e: any) => void
  onMouseLeave: (e: any) => void
  onTouchStart: (e: any) => void
  onTouchEnd: (e: any) => void
}
interface Options {
  hoverClassName?: string
}
export declare const hoverable: ({
  hoverClassName,
}?: Options) => <OriginalProps extends {}>(
  WrappedComponent: React.ComponentType<OriginalProps & InjectedProps>,
) => {
  new (props: Readonly<OriginalProps & ExternalProps>): {
    state: {
      isHover: boolean
    }
    render(): JSX.Element
    onMouseEnter: (e: any) => void
    onMouseLeave: (e: any) => void
    onTouchStart: (e: any) => void
    onTouchEnd: (e: any) => void
    context: any
    setState<K extends 'isHover'>(
      state:
        | {
            isHover: boolean
          }
        | ((
            prevState: Readonly<{
              isHover: boolean
            }>,
            props: Readonly<OriginalProps & ExternalProps>,
          ) =>
            | {
                isHover: boolean
              }
            | Pick<
                {
                  isHover: boolean
                },
                K
              >
            | null
          )
        | Pick<
            {
              isHover: boolean
            },
            K
          >
        | null,
      callback?: (() => void) | undefined,
    ): void
    forceUpdate(callBack?: (() => void) | undefined): void
    readonly props: Readonly<OriginalProps & ExternalProps> &
      Readonly<{
        children?: React.ReactNode
      }>
    refs: {
      [key: string]: React.ReactInstance
    }
  }
  new (props: OriginalProps & ExternalProps, context?: any): {
    state: {
      isHover: boolean
    }
    render(): JSX.Element
    onMouseEnter: (e: any) => void
    onMouseLeave: (e: any) => void
    onTouchStart: (e: any) => void
    onTouchEnd: (e: any) => void
    context: any
    setState<K extends 'isHover'>(
      state:
        | {
            isHover: boolean
          }
        | ((
            prevState: Readonly<{
              isHover: boolean
            }>,
            props: Readonly<OriginalProps & ExternalProps>,
          ) =>
            | {
                isHover: boolean
              }
            | Pick<
                {
                  isHover: boolean
                },
                K
              >
            | null
          )
        | Pick<
            {
              isHover: boolean
            },
            K
          >
        | null,
      callback?: (() => void) | undefined,
    ): void
    forceUpdate(callBack?: (() => void) | undefined): void
    readonly props: Readonly<OriginalProps & ExternalProps> &
      Readonly<{
        children?: React.ReactNode
      }>
    refs: {
      [key: string]: React.ReactInstance
    }
  }
  displayName: string
  contextType?: React.Context<any> | undefined
}
export {}
