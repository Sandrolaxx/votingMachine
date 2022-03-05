import { RectButtonProperties } from "react-native-gesture-handler";

export interface ButtonProps extends RectButtonProperties {
    children: string;
}

export interface InputProps {
    headerText: string;
}
