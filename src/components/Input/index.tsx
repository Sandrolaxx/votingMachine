import React from "react";
import { SetStateAction, useState } from "react";
import { InputProps } from "../../utils/types";
import { HeaderTitle, InputVote, SearchBox } from "./styles";

export default function Input({headerText}: InputProps) {
    const [firstVote, setFirstVote] = useState<string>();

    return (
        <SearchBox>
            <HeaderTitle>
                {headerText}
            </HeaderTitle>
            <InputVote
                keyboardType="numeric"
                maxLength={4}
                value={firstVote}
                onChangeText={(value: SetStateAction<string | undefined>) => setFirstVote(value)}
                placeholder="Insira um número"
            />
        </SearchBox>
    );
}