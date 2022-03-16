import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Candidate, Candidates } from "../../utils/types";
import { Container, LottieFile, ResultText, ResultTitle } from "./styles";
import confetiAnimation from "../../assets/confeti.json";
import { getWinners } from "../../utils/helpers";

export default function Results({ route, navigation }: any) {
    const [winners, setWinners] = useState<Candidate[]>([]);
    
    useEffect(() => {
        const candidates: Candidate[] = route.params.candidatesList;
        
        setWinners(getWinners(candidates));
        console.log(winners);
        
    }, [useIsFocused()]);

    return (
        <Container>
            <LottieFile 
                source={confetiAnimation}
                loop={false}
                autoPlay
            />
            <ResultTitle>
                Ganhadores🎉
            </ResultTitle>
            {winners.length ?
                winners.map(candidate => {
                <ResultText key={candidate.code}>
                    {candidate.role} Eleito com total de {candidate.votesNumber} votos! 
                </ResultText>
            }): <ResultText>Carregando...</ResultText>}
        </Container>
    );
}