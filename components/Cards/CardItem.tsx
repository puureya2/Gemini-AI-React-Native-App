import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// navigation
import { useNavigation } from "@react-navigation/native";

import { ScreenWidth } from "@/components/shared";
import { colors } from "../colors";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import card_bg from "../../assets/bgs/background_transparent.png";

import { formatBalance } from "@/utils/format";


const CardBackground = styled.ImageBackground.attrs({
    resizeMode: 'stretch',
})
`
  height: 120;
  width: ${ScreenWidth * 0.21}px;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
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
import { CardProps } from "./types";
import { Props as HomeProps } from "@/screens/Home";

const CardItem: FunctionComponent<CardProps> = (props) => {
    
  //configuring navigation
  const navigation = useNavigation<HomeProps["navigation"]>();

  // move to Balance Page
  const handlePress = () => {
    navigation.navigate("Balance", {...props});
  };

  return (
      <CardBackground source={card_bg}>

          <CardTouchable
              underlayColor={colors.secondary}
              onPress={handlePress}
          >

              <TouchableView>

                  <CardRow>
                    <RegularText textStyles={{ color: colors.white }}>
                      ****** {props.accountNo.slice(6, 10)}
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

          </CardTouchable>

      </CardBackground>
  );

};

export default CardItem;

// return (
//   <CardBackground source={card_bg}>

//       <CardTouchable
//           underlayColor={colors.secondary}
//           onPress={handlePress}
//       >

//           <TouchableView>

//               <CardRow>
//                 <RegularText textStyles={{ color: colors.white }}>
//                   ****** {props.accountNo.slice(6, 10)}
//                 </RegularText>
//               </CardRow>

//               <CardRow>

//                   <View style={{ flex: 3 }}>
//                     <SmallText textStyles={{ marginBottom: 5, color: colors.lightgray }}>
//                       Total Balance
//                     </SmallText>
//                     <RegularText textStyles={{ fontSize: 19 }}>
//                         ${formatBalance(props.balance)}
//                     </RegularText>
//                   </View>

//                   <Logo source={props.logo} />

//               </CardRow>

//           </TouchableView>

//       </CardTouchable>

//   </CardBackground>
// );