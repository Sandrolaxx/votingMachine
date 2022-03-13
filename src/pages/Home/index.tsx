import React, { useCallback, useEffect, useState } from "react";
import { Container, LottieFile, TextVote } from "./styles";
import votingAnimation from "../../assets/votingAnimation.json"
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { getDBConnection, listCandidates } from "../../services/SQLiteConnection";
import { Candidate } from "../../utils/types";

export default function Home() {
    const navigation = useNavigation<any>();
    const [isContainVotes, setContainVotes] = useState(false);
    const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);

    useEffect(() => {
        loadDataCallback();
    }, []);

    function handleNavigate() {
        navigation.navigate("Vote");
    }

    async function loadDataCallback() {
        try {
            const db = await getDBConnection();
            const storedTodoItems = await listCandidates(db);

            if (storedTodoItems.length) {
                setCandidatesList(storedTodoItems);
                setContainVotes(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

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
            {isContainVotes ?
                <Button onPress={() => handleNavigate()}>
                    Resultado
                </Button> : false}
        </Container>
    );
}