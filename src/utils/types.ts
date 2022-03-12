import { RectButtonProperties } from "react-native-gesture-handler";

export interface ButtonProps extends RectButtonProperties {
    children: string;
}

export interface InputProps {
    headerText: string;
}

export type Candidate = {
    name: string;
    role: EnumRole | string,
    code: number;
    votesNumber: number;
    politicalParty: string;
}

export enum EnumRole {
    PRESIDENTE = "Presidente",
    GOVERNADOR = "Governador",
    SENADOR = "Senador",
    DEPUTADO_FEDERAL = "Deputado Federal",
    DEPUTADO_ESTADUAL = "Deputado Estadual"
}
