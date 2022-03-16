import AnimatedLottieView from "lottie-react-native";
import styled from "../../../node_modules/styled-components/native";

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: #1d1d1d;
    align-items: center;
`;

export const ResultTitle = styled.Text`
    font-size: 32px;
    margin: 6% 0px;
    color: #9606CF;
`

export const ResultText = styled.Text`
    margin-top: 20px;
    font-size: 18px;
    color: #9606CF;
`

export const LineSeparator = styled.Text`
    border-top-color: #D19EF3;
    border-top-width: 1.5px;
    margin-top: 14px;
`

export const LottieFile = styled(AnimatedLottieView)`
    height: 100%;
    position: absolute;
`;