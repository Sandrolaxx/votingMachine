import AnimatedLottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "../../../node_modules/styled-components/native";

export const ContainerScroll = styled(ScrollView)`
    height: 100%;
    width: 100%;
    background-color: #1d1d1d;
`;

export const Container = styled.View`
    align-items: center;
`;

export const ResultTitle = styled.Text`
    font-size: 32px;
    margin: 6% 0px;
    color: #9606CF;
`

export const ResultText = styled.Text`
    width: 80%;
    margin-top: 12px;
    text-align: center;
    font-size: 22px;
    color: #9606CF;
`

export const ResultView = styled.View`
    width: 90%;
    align-items: center;
`

export const LineSeparator = styled.Text`
    width: 100%;
    border-top-color: #9606CF;
    border-top-width: 1px;
`

export const LottieFile = styled(AnimatedLottieView)`
    height: 100%;
    position: absolute;
`;