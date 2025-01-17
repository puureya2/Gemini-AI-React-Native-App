import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { Container, ScreenWidth } from "@/components/shared";
import { colors } from "../colors";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import TransactionAvi from "./TransactionAvi";


const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;


// types
import { TransactionProps } from "./types";


const TransactionItem: FunctionComponent<TransactionProps> = (props) => {

    return (
        <TransactionRow>

            <LeftView>

                <TransactionAvi 
                    background={props.art.background}
                    icon={props.art.icon}
                />

                <View style={{ marginLeft: 10 }}>
                    
                    <RegularText
                        textStyles={{
                            color: colors.secondary,
                            textAlign: "left",
                            marginBottom: 5,
                        }}
                    >
                        {props.title}
                    </RegularText>

                    <SmallText
                        textStyles={{
                            color: colors.darkgray,
                            textAlign: "left",
                        }}
                    >
                        {props.subtitle}
                    </SmallText>

                </View>

            </LeftView>

            <RightView>

                <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: "right",
                        marginBottom: 5,
                    }}
                >
                    {props.amount}
                </RegularText>

                <SmallText
                    textStyles={{
                        color: colors.darkgray,
                        textAlign: "right",
                    }}
                >
                    {props.date}
                </SmallText>

            </RightView>

        </TransactionRow>
    );

};

export default TransactionItem;