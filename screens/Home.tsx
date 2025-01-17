import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ScrollView, SafeAreaView } from "react-native";

import { Container } from "@/components/shared";
import { colors } from "@/components/colors";

import CardSection from "@/components/Cards/CardSection";
import TransactionSection from "@/components/Transactions/TransactionSection";
import SendMoneySection from "@/components/SendMoney/SendMoneySection";

// card logos
import logo1 from "../assets/cards/visa_white.png";
import logo2 from "../assets/cards/mc.png";

// images
import background from "./../assets/bgs/background_v1.png";

// portraits
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";


const HomeContainer = styled.View`
  background-color: ${colors.lightgray};
  width: 100%;
  flex: 1;
`;


// types
import { RootStackParamList } from "@/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">


const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "1234567890",
      balance: 20000.00,
      alias: "First Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "1234567890",
      balance: 20000.00,
      alias: "Second Debit",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "1234567890",
      balance: 20000.00,
      alias: "Third Debit",
      logo: logo1,
    },
  ];

  const TransactionData = [
    {
      id: 1,
      title: "Taxi",
      subtitle: "Uber car",
      amount: "-$86.00",
      date: "14 Sep 2021",
      art: {
        icon: "car",
        background: colors.primary,
      },
    },
    {
      id: 2,
      title: "Shopping",
      subtitle: "Ali Express",
      amount: "-$286.00",
      date: "14 Sep 2021",
      art: {
        icon: "cart",
        background: colors.tertiary,
      },
    },
    {
      id: 3,
      title: "Travel",
      subtitle: "Emirates",
      amount: "-$86.00",
      date: "14 Sep 2021",
      art: {
        icon: "airplane",
        background: colors.accent,
      },
    },
  ];

  const SendMoneyData = [
    {
      id: 1,
      name: "Kevin Chifamba",
      amount: "2430.50",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      name: "Harleen Scot",
      amount: "4450.50",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      name: "James Corbyn",
      amount: "6250.00",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
        <StatusBar style="dark" />
        <CardSection data={cardsData} />
        <TransactionSection data={TransactionData} />
        <SendMoneySection data={SendMoneyData} />
    </HomeContainer>
  );
};

export default Home;


