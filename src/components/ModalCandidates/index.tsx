import React, { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { ModalProps } from "../../utils/types";
import Button from "../Button";
import { Container, LineSeparator, ModalArea, ModalText, ModalTextArea } from "./styles";

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
                        {candidates.map(candidate => (
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
                        ))}
                    </ModalTextArea>
                    <Button onPress={() => setModalVisible(!modalVisible)}>
                        Fechar
                    </Button>
                </ModalArea>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <ModalText>ℹ️ Lista de Candidatos</ModalText>
            </Pressable>
        </Container>
    );
}