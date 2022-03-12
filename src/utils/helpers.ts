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