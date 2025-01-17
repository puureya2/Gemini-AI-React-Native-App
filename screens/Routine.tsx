import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ScrollView, SafeAreaView } from "react-native";

import { Container } from "@/components/shared";
import { colors } from "@/components/colors";

import AmountSection from "@/components/Balance/AmountSection";
import RoutineCardSection from "@/components/Routine/RoutineCardSection";
import ButtonSection from "@/components/Routine/ButtonSection";


const RoutineContainer = styled.View`
  background-color: ${colors.lightgray};
  width: 100%;
  flex: 1;
  padding: 25px;
`;


import { RootStackParamList } from "@/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Routine">;


const Routine: FunctionComponent<Props> = ({ route }) => {

  return (
    <RoutineContainer>
        <StatusBar style="dark" />
        <RoutineCardSection {...route?.params} />
        <ButtonSection />
    </RoutineContainer>
  );
};

export default Routine;


// return (
//   <RoutineContainer>
//       <StatusBar style="dark" />
//       <AmountSection balance={route?.params?.balance} />
//       <BalanceCardSection {...route?.params} />
//       <ButtonSection  />
//   </RoutineContainer>
// );

