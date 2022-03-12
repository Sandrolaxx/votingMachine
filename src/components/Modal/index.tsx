import React from "react";
import { useState } from "react";
import { Alert, Button, Pressable, Text, View } from "react-native";
import { ModalProps } from "../../utils/types";
import { Container, ModalIOptions } from "./styles";

export default function Modal({ candidates }: ModalProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <ModalIOptions
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }} >
                <View>
                    <View>
                        {candidates.map(candidate => (
                            <Text key={candidate.code}>
                                {candidate.name}
                            </Text>
                        ))}
                        <Button title="Hide Modal"
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </View>
                </View>
            </ModalIOptions>
            <Pressable
                onPress={() => setModalVisible(true)}
            >
                <Text>Show Modal</Text>
            </Pressable>
        </Container>
    );
}