import React, { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { ModalProps } from "../../utils/types";
import Button from "../Button";
import { Container, LineSeparator, ModalArea, ModalButtonArea, ModalText, ModalTextArea } from "./styles";

export default function ModalCandidates({ candidates }: ModalProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }} >
                <ModalArea>
                    <ModalTextArea>
                        {candidates.length ?
                            candidates.map(candidate => (
                                <View key={candidate.code}>
                                    <ModalText>
                                        Partido: {candidate.politicalParty}
                                    </ModalText>
                                    <ModalText>
                                        Nome: {candidate.name}
                                    </ModalText>
                                    <ModalText>
                                        Número: {candidate.code}
                                    </ModalText>
                                    <LineSeparator />
                                </View>
                            ))
                            :
                            <ModalText>
                                Deseja mesmo realizar a apuração dos votos??🤔
                            </ModalText>
                        }
                    </ModalTextArea>
                    <ModalButtonArea>
                        {candidates.length ?
                            false
                            :
                            <Button onPress={() => setModalVisible(!modalVisible)}>
                                SIM
                            </Button>}
                        <Button onPress={() => setModalVisible(!modalVisible)}>
                            {candidates.length ? `FECHAR` : `NÃO`}
                        </Button>
                    </ModalButtonArea>
                </ModalArea>
            </Modal>
                <Pressable onPress={() => setModalVisible(true)}>
                    <ModalText>ℹ️ Lista de Candidatos</ModalText>
                </Pressable>
        </Container>
    );
}