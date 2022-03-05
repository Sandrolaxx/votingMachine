import React from "react";
import { ButtonProps } from "../../utils/types";
import { Container, ButtonText } from "./styles";

export default function Button({ children, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}