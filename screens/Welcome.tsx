import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

import { Container } from "@/components/shared";
import { colors } from "@/components/colors";

import BigText from "@/components/Texts/BigText";
import SmallText from "@/components/Texts/SmallText";

import RegularButton from "@/components/Buttons/RegularButton";

// image
import background from "./../assets/bgs/background_v1.png";


const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image.attrs({
  resizeMode: 'stretch',
})
`
  width: 100%;
  height: 100%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;


// types
import { RootStackParamList } from "@/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <>
            <StatusBar style="light" />
            
            <WelcomeContainer>

                <TopSection>
                  <TopImage source={background} />
                </TopSection>

                <BottomSection>
                  <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Best payment method, connects your money to your friends, blah blah
                  </BigText>
                  <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Best payment method, connects your money to your friends, blah blah
                  </SmallText>
                  <RegularButton onPress={() => { navigation.navigate("Home") }}>
                    Get Started
                  </RegularButton>
                </BottomSection>
            
            </WelcomeContainer>
        
        </>
    );
};

export default Welcome;