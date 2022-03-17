import React from "react";
import { ArrowArea, Container } from "./styles";
import ArrowIcon from '../../assets/icons/arrow.svg';
import { useNavigation } from "@react-navigation/native";


export default function GoBackArrow() {
    const navigation = useNavigation();

    function hadleGoBack() {
        navigation.goBack();
    };

    return (
        <Container>
            <ArrowArea onPress={() => hadleGoBack()}>
                <ArrowIcon width={60} height={40} />
            </ArrowArea>
        </Container>
    );
}