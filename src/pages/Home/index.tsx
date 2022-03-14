import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import votingAnimation from "../../assets/votingAnimation.json";
import Button from "../../components/Button";
import ModalCandidates from "../../components/ModalCandidates";
import { getDBConnection, listCandidates } from "../../services/SQLiteConnection";
import { Candidate } from "../../utils/types";
import { Container, LottieFile, TextVote } from "./styles";

export default function Home() {
    const navigation = useNavigation<any>();
    const [isContainVotes, setContainVotes] = useState(false);
    const [isShowModal, setShowModal] = useState(false);
    const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);

    useEffect(() => {
        loadDataCallback();
    }, [useIsFocused()]);

    function handleNavigate() {
        navigation.navigate("Vote", {isContainVotes});
    }

    async function loadDataCallback() {
        try {
            const db = await getDBConnection();
            const storedItems = await listCandidates(db);
            console.log(storedItems);

            if (storedItems.length) {
                setCandidatesList(storedItems);
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

            {isContainVotes ?
                <>
                    <Button onPress={() => handleNavigate()}>
                        Votar!
                    </Button>
                    <Button onPress={() => setShowModal(true)}>
                        Resultado
                    </Button> 
                </>
                :
                <Button onPress={() => handleNavigate()}>
                    Votar!
                </Button>}
            {isShowModal && <ModalCandidates candidates={[]} />}    
        </Container>
    );
}