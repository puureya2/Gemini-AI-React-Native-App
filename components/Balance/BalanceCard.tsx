import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { colors } from "../colors";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import card_bg from "../../assets/bgs/background_transparent.png";

import { formatBalance } from "@/utils/format";


const CardBackground = styled.ImageBackground.attrs({
    resizeMode: 'stretch',
})
`
  height: 75%;
  width: 100%;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image.attrs({
    resizeMode: 'contain',
})
`
  width: 100%;
  height: 100%;
  flex: 1;
`;


// types
import { BalanceCardProps } from "./types";

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    
    return (
        <CardBackground source={card_bg}>
            <TouchableView>

                <CardRow>
                    <RegularText textStyles={{ color: colors.white }}>
                    ****** {props?.accountNo?.slice(6, 10)}
                    </RegularText>
                </CardRow>

                <CardRow>

                    <View style={{ flex: 3 }}>
                        <SmallText textStyles={{ marginBottom: 5, color: colors.lightgray }}>
                            Total Balance
                        </SmallText>
                        <RegularText textStyles={{ fontSize: 19 }}>
                            ${formatBalance(props.balance)}
                        </RegularText>
                    </View>

                    <Logo source={props.logo} />

                </CardRow>

            </TouchableView>
        </CardBackground>
    );

};

export default BalanceCard;