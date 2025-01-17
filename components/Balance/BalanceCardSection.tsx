import React, { useRef, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

import BalanceCard from './BalanceCard';


const BalanceCardSectionBackground = styled.View`
  width: 100%;
  flex: 2;
  align-items: center;
`;


import { BalanceCardProps } from './types';

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {

  return (
    <BalanceCardSectionBackground>

        <BalanceCard {...props} />

    </BalanceCardSectionBackground>
  );
};


export default BalanceCardSection;
