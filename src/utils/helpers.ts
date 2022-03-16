import { getDBConnection, listCandidates, saveVotes, updateVotes } from "../services/SQLiteConnection";
import { Candidate, EnumRole } from "./types";

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

export async function handleNewVote(votedList: Candidate[]) {
    try {
        const db = await getDBConnection();
        await saveVotes(db, votedList);
    } catch (error) {
        console.error(error);
    }
}

export async function handleUpdateVotes(votedList: Candidate[]) {

    const newVotedCandidates: Candidate[] = [];

    try {
        const db = await getDBConnection();

        const storedItems = await listCandidates(db);

        if (storedItems.length) {
            votedList.map(async candidate => {
                let isContainCandidate = false;
                storedItems.forEach(c => c.code === candidate.code 
                        && isContainCandidate === false ? isContainCandidate = true : false);
                
                if (isContainCandidate) {
                    await updateVotes(db, candidate);
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

export function getWinners(candidates: Candidate[]): Candidate[] {
    const winners: Candidate[] = [];
    const roles = getEnumRoleElements();

    roles.forEach(role => {
        const candidatesInRole = candidates.filter(candidate => isSameRole(candidate.role, role));
        
        winners.push(firstElement(candidatesInRole.sort(candidate => candidate.votesNumber)));
    });

    return winners;
}