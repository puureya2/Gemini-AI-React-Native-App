import React, { useRef, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

import { formatBalance } from '@/utils/format';


const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  flex: 1;
  align-items: center;
`;


import { AmountProps } from './types';

const AmountSection: FunctionComponent<AmountProps> = (props) => {

  return (
    <AmountSectionBackground>

        <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
            Total Balance
        </SmallText>

        <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
          ${formatBalance(props.balance)}
        </RegularText>

    </AmountSectionBackground>
  );
};

export default AmountSection;

