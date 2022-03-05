import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Header, TitleText, LottieFile, LoadingText } from "./styles";
import loadingAnimation from "../../assets/loadingAnimation.json"

export default function Vote() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {setLoading(false)}, 5000);
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
                    Informe o número de seus candidatos👇
                </TitleText>
                <Input headerText="Número do Primeiro Candidato" />
                <Input headerText="Número do Segundo Candidato" />
                <Input headerText="Número do Terceiro Candidato" />
                <Input headerText="Número do Quarto Candidato" />
                <Button onPress={() => handleVote()}>
                    Votar
                </Button>
            </Container>
    );
}