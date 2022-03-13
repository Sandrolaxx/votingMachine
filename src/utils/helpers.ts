import { EnumRole } from "./types";

export function getEnumRoleElements() {
    let elements: EnumRole[] = [];

    elements.push(EnumRole.PRESIDENTE);
    elements.push(EnumRole.SENADOR);
    elements.push(EnumRole.GOVERNADOR);
    elements.push(EnumRole.DEPUTADO_FEDERAL);
    elements.push(EnumRole.DEPUTADO_ESTADUAL);

    return elements;
}

export function firstElement(list: any[]) {
    if (list.length != undefined
            && list.length > 0) {
        return list[0];
    }
}

export function getUriCandidates() {
    return "https://mocki.io/v1/2fdd9fc8-a7e3-4a36-a046-bed8f673d42f";
}

export function isSameRole(candidateRole: string, role: string) {
    return EnumRole[candidateRole] == role;
}