import * as React from 'react';
import { Rect } from './DropdownContent';
interface Props {
    children?: React.ReactNode;
}
interface State {
    active: boolean;
    clientRect?: Rect;
}
interface DropdownContext {
    keyName: string;
    active: boolean;
    clientRect?: Rect;
    toggleDropdown: (clientRect: Rect) => void;
}
export declare const DropdownConsumer: React.ExoticComponent<React.ConsumerProps<DropdownContext>>;
export declare class Dropdown extends React.PureComponent<Props, State> {
    state: State;
    keyName: string;
    componentDidMount: () => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleToggle;
    private handleClickBody;
}
export {};
