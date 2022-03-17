import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import loadingAnimation from "../../assets/loadingAnimation.json";
import GoBackArrow from "../../components/GoBackArrow";
import Input from "../../components/Input";
import ModalCandidates from "../../components/ModalCandidates";
import { firstElement, getEnumRoleElements, getUriCandidates, handleNewVote, handleUpdateVotes, isSameRole } from "../../utils/helpers";
import { Candidate, EnumRole } from "../../utils/types";
import { Container, Header, LoadingText, LottieFile, TitleText } from "./styles";

export default function Vote({ route, navigation }: any) {
    const [index, setIndex] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [votedList, setVotedList] = useState<Candidate[]>([]);
    const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);
    const enumRoles: EnumRole[] = getEnumRoleElements();
    const isNewVote = !route.params.isContainVotes;

    useEffect(() => {
        let isMounted = true;

        setInterval(() => {
            fetch(getUriCandidates())
                .then(res => {
                    res.json().then(json => isMounted ? setCandidatesList(json.candidates) : false);
                })
                .catch(() => Alert.alert("Erro ao buscar dados dos candidatos!❌"))
                .finally(() => isMounted ? setLoading(false) : false);
        }, 4200);

        return () => {
            isMounted = false;
        }
    }, []);

    async function handleVote(candidateCode: number) {
        const vodtedCandidate = firstElement(candidatesList.filter(candidate => candidate.code == candidateCode));

        if (vodtedCandidate == undefined) {
            Alert.alert("Número de candidato informado inválido!❌");
            return;
        } else if (!isSameRole(vodtedCandidate.role, enumRoles[index])) {
            Alert.alert(`Número candidato inválido para o cargo de ${enumRoles[index]}!🤯`);
            return;
        }

        vodtedCandidate.votesNumber = 1;

        if (enumRoles.length == index + 1) {
            votedList.push(vodtedCandidate);

            isNewVote ? handleNewVote(votedList) : handleUpdateVotes(votedList);

            navigation.goBack();
        } else {
            votedList.push(vodtedCandidate);

            setVotedList(votedList);
            setIndex(index + 1);
        }
    }

    return (
        isLoading ?
            <Container>
                <LottieFile
                    source={loadingAnimation}
                    autoPlay
                    loop
                />
                <LoadingText>
                    Loading...
                </LoadingText>
            </Container>
            :
            <>
                <GoBackArrow />
                <Container>
                    <Header />
                    <TitleText>
                        Informe o número do seu candidato para {enumRoles[index]}👇
                    </TitleText>
                    <ModalCandidates candidates={candidatesList.filter(
                        candidate => isSameRole(candidate.role, enumRoles[index])
                    )} />
                    <Input
                        headerText={"Informe o número do candidato"}
                        handleVote={handleVote}
                    />
                </Container>
            </>
    );
}