import { Alert } from "react-native";
import { getDBConnection, listCandidates, saveVotes, updateVotes } from "../services/SQLiteConnection";
import { Candidate, EnumRole } from "./types";

export function getEnumRoleElements() {
    let elements: EnumRole[] = [];

    elements.push(EnumRole.PRESIDENTE);
    elements.push(EnumRole.GOVERNADOR);
    elements.push(EnumRole.SENADOR);
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

export function isEmpty(array: any[]) {
    return array != undefined && array.length == 0;
}

export function getUriCandidates() {
    return "https://mocki.io/v1/2fdd9fc8-a7e3-4a36-a046-bed8f673d42f";
}

export function isSameRole(candidateRole: string, role: string) {
    return EnumRole[candidateRole] == role;
}

export async function handleNewVote(votedList: Candidate[]) {
    try {
        const db = await getDBConnection();
        await saveVotes(db, votedList);
    } catch (error) {
        console.error(error);
    }
}

export async function handleUpdateVotes(votedList: Candidate[]) {
    try {
        const newVotedCandidates: Candidate[] = [];
        const db = await getDBConnection();
        const storedItems = await listCandidates(db);

        if (storedItems.length) {
            votedList.map(async candidate => {
                let isContainCandidate = false;
                storedItems.forEach(c => c.code === candidate.code
                    && isContainCandidate === false ? isContainCandidate = true : false);

                if (isContainCandidate) {
                    await updateVotes(db, firstElement(storedItems.filter(c => c.code === candidate.code)));
                } else {
                    newVotedCandidates.push(candidate);
                }
            });
        }

        if (newVotedCandidates.length >= 1) {
            await saveVotes(db, newVotedCandidates);
        }
    } catch (error) {
        console.error(error);
    }
}

export function getWinnersAndDraws(candidates: Candidate[]): Candidate[] {
    const roles = getEnumRoleElements();
    const nullOrBlank = "BRANCO" || "NULO";
    let winners: Candidate[] = [];

    roles.forEach(role => {
        const candidatesInRole = candidates.filter(candidate => isSameRole(candidate.role, role) && candidate.name != nullOrBlank);
        
        if (candidatesInRole.length) {
            const candidateWinner: Candidate = firstElement(candidatesInRole.sort((a, b) => sortByVotes(a, b)));
            const candidatesInTie: Candidate[] = candidatesInRole.filter(candidate => candidate.votesNumber == candidateWinner.votesNumber);
    
            if (candidatesInTie.length > 1) {
                winners = winners.concat(candidatesInTie);
            } else {
                winners.push(candidateWinner);
            }
        }

    });

    return winners;
}

export function resolveDrawsSecundTurn(candidates: Candidate[], onlySecondTurn: boolean): Candidate[] {
    const roles = onlySecondTurn ? getEnumRoleElements().slice(0, 2) : getEnumRoleElements().slice(2, 5);
    let drawsSecundTurn: Candidate[] = [];

    roles.forEach(role => {
        const candidatesInRole = candidates.filter(candidate => isSameRole(candidate.role, role));

        if (candidatesInRole.length > 1) {
            drawsSecundTurn = drawsSecundTurn.concat(candidatesInRole);
        }
    });

    return drawsSecundTurn;
}

export function resolveNullBlankVotes(candidates: Candidate[], onlyBlank: boolean): Candidate[] {
    const roles = getEnumRoleElements();
    const nullBlankType = onlyBlank ? "BRANCO" : "NULO";
    let nullBlankVotes: Candidate[] = [];

    roles.forEach(role => {
        const candidatesInRole = candidates
            .filter(candidate => isSameRole(candidate.role, role)
                && candidate.name == nullBlankType);

        if (candidatesInRole.length > 1) {
            nullBlankVotes = nullBlankVotes.concat(candidatesInRole);
        }
    });

    return nullBlankVotes;
}

export function sortByVotes(a: Candidate, b: Candidate) {
    if (a.votesNumber > b.votesNumber) {
        return -1;
    }

    if (a.votesNumber < b.votesNumber) {
        return 1;
    }

    return 0;
}

export function getBlankOrNullCandidate(isBlank: boolean, enumRole: EnumRole): Candidate {
    const blankNullCandidate: Candidate = {
        code: getNullBalnkCandidateCode(enumRole, isBlank),
        name: isBlank ? "BRANCO" : "NULO",
        politicalParty: isBlank ? "BRANCO" : "NULO",
        role: enumRole,
        votesNumber: 0
    };

    return blankNullCandidate;
}

export function validCandidate(votedCandidate: Candidate, enumRole: EnumRole, isBlankNullVote: boolean): boolean {
    if (votedCandidate == undefined) {
        Alert.alert("Número de candidato informado inválido!❌");
        return false;
    } else if (!isSameRole(votedCandidate.role, enumRole)
        && !isBlankNullVote) {
        Alert.alert(`Número candidato inválido para o cargo de ${enumRole}!🤯`);
        return false;
    }
    
    return true;
}

function getNullBalnkCandidateCode(enumRole: EnumRole, isBlank: boolean) {
    if (isBlank) {
        switch (enumRole) {
            case EnumRole.PRESIDENTE:
                return 1;
            case EnumRole.SENADOR:
                return 2;
            case EnumRole.GOVERNADOR:
                return 3;
            case EnumRole.DEPUTADO_FEDERAL:
                return 4;
            case EnumRole.DEPUTADO_ESTADUAL:
                return 5;
        }
    } else {
        switch (enumRole) {
            case EnumRole.PRESIDENTE:
                return 6;
            case EnumRole.SENADOR:
                return 7;
            case EnumRole.GOVERNADOR:
                return 8;
            case EnumRole.DEPUTADO_FEDERAL:
                return 9;
            case EnumRole.DEPUTADO_ESTADUAL:
                return 10;
        }
    }
}