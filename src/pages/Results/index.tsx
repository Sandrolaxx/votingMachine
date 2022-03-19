import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import confetiAnimation from "../../assets/confeti.json";
import GoBackArrow from "../../components/GoBackArrow";
import { deleteAllVotes, getDBConnection, listCandidates } from "../../services/SQLiteConnection";
import { Candidate, EnumRole } from "../../utils/types";
import { getWinnersAndDraws, resolveDraws } from "../../utils/utils";
import { Container, ContainerScroll, LineSeparator, LottieFile, ResultText, ResultTitle, ResultView } from "./styles";

export default function Results() {
    const [winners, setWinners] = useState<Candidate[]>([]);
    const [draws, setDraws] = useState<Candidate[]>([]);

    useEffect(() => {
        let isMounted = true;

        loadDataCallback().then(res => {
            if (isMounted) {
                const winnersAndDraws = getWinnersAndDraws(res!);

                if (winnersAndDraws.length === 5) {
                    setWinners(winnersAndDraws);
                } else {
                    const allDraws = resolveDraws(winnersAndDraws);

                    setDraws(allDraws);
                    setWinners(winnersAndDraws.filter(winner => !allDraws.includes(winner)))
                }
            }
        });

        return () => {
            isMounted = false;
        }
    }, [useIsFocused()]);

    async function loadDataCallback() {
        try {
            const db = await getDBConnection();
            const storedItems = await listCandidates(db);

            await deleteAllVotes(db);

            if (storedItems.length) {
                return storedItems;
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ContainerScroll>
            <GoBackArrow />
            <LottieFile
                source={confetiAnimation}
                loop={false}
                autoPlay
            />
            <Container>
                {winners.length > 0 &&
                    <>
                        <ResultTitle>
                            Ganhadores🎉
                        </ResultTitle>
                        {winners.map(candidate => (
                            <ResultView key={candidate.code}>
                                <ResultText>
                                    {EnumRole[candidate.role]}
                                </ResultText>
                                <ResultText>
                                    {candidate.name} eleito com total de {candidate.votesNumber} votos!
                                </ResultText>
                                <LineSeparator />
                            </ResultView>
                        ))}
                    </>
                }
                {draws.length ?
                    <>
                        <ResultTitle>
                            Segundo Turno😬
                        </ResultTitle>
                        {draws.map(candidate => (
                            <ResultView key={candidate.code}>
                                <ResultText>
                                    {EnumRole[candidate.role]}
                                </ResultText>
                                <ResultText>
                                    {candidate.name} - {candidate.votesNumber} votos
                                </ResultText>
                                <LineSeparator />
                            </ResultView>
                        ))}
                    </>
                    :
                    false
                }
            </Container>
        </ContainerScroll>
    );
}