import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { Container, ScreenWidth } from "@/components/shared";
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";


const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 45px;
  height: 45px;
`;


// types
import { TransactionAviProps } from "./types";

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {

    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} color={colors.white} />
        </StyledView>
    );

};

export default TransactionAvi;