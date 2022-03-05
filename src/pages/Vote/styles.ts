import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: #1d1d1d;
    align-items: center;
`;

export const Header = styled.View`
    margin-top: 64px;
`;

export const TitleText = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: #9606cf;
`;

export const LoadingText = styled.Text`
    text-align: center;
    font-size: 28px;
    color: #9606cf;
    `;

export const LottieFile = styled(LottieView)`
    height: 60%;
    margin-top: 14%;
    margin-left: 12%;
    margin-bottom: -26%;
`;