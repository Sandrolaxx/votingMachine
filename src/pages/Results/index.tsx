import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import confetiAnimation from "../../assets/confeti.json";
import { ModalText } from "../../components/ModalCandidates/styles";
import { getDBConnection, listCandidates } from "../../services/SQLiteConnection";
import { getWinners } from "../../utils/helpers";
import { Candidate } from "../../utils/types";
import { Container, LineSeparator, LottieFile, ResultText, ResultTitle } from "./styles";

export default function Results({ navigation }: any) {
    const [winners, setWinners] = useState<Candidate[]>([]);

    useEffect(() => {
        let isMounted = true;

        loadDataCallback().then(res => isMounted ? setWinners(getWinners(res!)) : false);
        console.log(winners);

        return () => {
            isMounted = false;
        }
    }, [useIsFocused()]);

    async function loadDataCallback() {
        try {
            const db = await getDBConnection();
            const storedItems = await listCandidates(db);

            if (storedItems.length) {
                return storedItems;
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                winners.map(candidate => (
                    <View key={candidate.code}>
                        <ResultText>
                            {candidate.role.toString()} Eleito com total de {candidate.votesNumber} votos!
                        </ResultText>
                        <LineSeparator />
                    </View>
                ))
                : <ResultText>Carregando...</ResultText>
            }
        </Container>
    );
}