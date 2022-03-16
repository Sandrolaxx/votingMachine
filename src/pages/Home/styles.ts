import styled from "styled-components/native";
import AnimatedLottieView from "lottie-react-native";

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: #1d1d1d;
    align-items: center;
`;

export const LottieFile = styled(AnimatedLottieView)`
    height: 60%;
    margin-left: 12%;
`;

export const TextVote = styled.Text`
    font-size: 36px;
    margin-top: -42%;
    color: #9606CF;
`;