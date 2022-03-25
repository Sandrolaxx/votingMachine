import AnimatedLottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "../../../node_modules/styled-components/native";

export const ContainerScroll = styled(ScrollView)`
    height: 100%;
    width: 100%;
    background-color: #1D1D1D;
`;

export const Container = styled.View`
    align-items: center;
    margin-top: 48px;
`;

export const LottieFile = styled(AnimatedLottieView)`
    height: 100%;
    position: absolute;
`;