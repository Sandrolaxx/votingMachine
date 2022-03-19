import styled from "../../../node_modules/styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 52px;
    width: 142px;
    background: ${props => props.shadow ? "#4e026d" : "#9606CF"};
    border-radius: 14px;
    justify-content: center;
    align-items: center;
    margin: 16% 4% 0px 4%;
`;

export const ButtonText = styled.Text`
    color: #f7f7f7;
    font-size: 22px;
`;