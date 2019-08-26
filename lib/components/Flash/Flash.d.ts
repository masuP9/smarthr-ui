/// <reference types="react" />
interface Props {
    type: 'success' | 'info' | 'alert' | 'danger' | '';
    text: string;
    visible: boolean;
    onClose: () => void;
}
export declare const Flash: (props: Props) => JSX.Element;
export {};
