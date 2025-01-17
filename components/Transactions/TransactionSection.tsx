import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";

// types
import { TransactionSectionProps } from "./types";
import TransactionItem from "./TransactionItem";


const TransactionSectionBackground = styled.View`
  width: 100%;
  flex: 2;
  padding-top: 5px;
  padding-left: 25px;
  padding-right: 25px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>

            <TransactionRow style={{ marginBottom: 25 }}>

                <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                    Conversations
                </RegularText>

                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.darkgray} />
                </SmallText>

            </TransactionRow>

            <TransactionList
                data={props.data} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor={ ({ id }: any) => id.toString() }
                renderItem={ ({ item }: any) => <TransactionItem {...item} /> }
            />

        </TransactionSectionBackground>
    );
};

export default TransactionSection;