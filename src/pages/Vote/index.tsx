import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Header, TitleText, LottieFile, LoadingText } from "./styles";
import loadingAnimation from "../../assets/loadingAnimation.json"
import candidatesJson from "../../services/dataset.json"
import { Candidate, EnumRole } from "../../utils/types";
import { getEnumRoleElements } from "../../utils/helpers";

export default function Vote() {
    const [isLoading, setLoading] = useState(true);
    const candidatesList: Candidate[] = candidatesJson.candidates;
    const roles: EnumRole[] = getEnumRoleElements();

    useEffect(() => {
        console.log(roles[0]);
        console.log(candidatesList[0].role);

        setTimeout(() => { setLoading(false) }, 1000);
    }, []);

    function handleVote() {
        console.log("teste");
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
            <Container>
                <Header />

                <TitleText>
                    Informe o número do seu candidato para {candidatesList[0].role}👇
                </TitleText>
                {candidatesList.map(candidate => (
                    candidate.role == roles[0].toUpperCase() ?
                        <>
                            <Input headerText={`Candidato ${candidate.name}`} />
                        </>
                        : false
                ))}

                <Button onPress={() => handleVote()}>
                    Votar
                </Button>
            </Container>
    );
}