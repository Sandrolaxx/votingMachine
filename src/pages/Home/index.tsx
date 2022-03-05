import React from "react";
import { Container, LottieFile, TextVote } from "./styles";
import votingAnimation from "../../assets/votingAnimation.json"
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation<any>();

    function handleNavigate(){
        navigation.navigate("Vote");
    }

    return (
        <Container>
            <LottieFile 
                source={votingAnimation}
                autoPlay
                loop
            />
            <TextVote>
                Voting Machine v.1🔥
            </TextVote>
            <Button onPress={() => handleNavigate()}>
                Votar!
            </Button>
        </Container>
    );
}