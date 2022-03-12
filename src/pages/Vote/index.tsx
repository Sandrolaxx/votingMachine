import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Header, TitleText, LottieFile, LoadingText } from "./styles";
import loadingAnimation from "../../assets/loadingAnimation.json"
import candidatesJson from "../../services/dataset.json"
import { Candidate, EnumRole } from "../../utils/types";
import { getEnumRoleElements } from "../../utils/helpers";
import Modal from "../../components/Modal";

export default function Vote() {
    const [isLoading, setLoading] = useState(false);
    const candidatesList: Candidate[] = candidatesJson.candidates;
    const enumRoles: EnumRole[] = getEnumRoleElements();
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => { setLoading(false) }, 2000);
    // }, []);

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
                    Informe o número do seu candidato para {enumRoles[index]}👇
                </TitleText>

                <Modal candidates={candidatesList} />

                <Input headerText={"Informe o número do candidato"} />
                
                <Button onPress={() => handleVote()}>
                    Confirmar
                </Button>
            </Container>
    );
}