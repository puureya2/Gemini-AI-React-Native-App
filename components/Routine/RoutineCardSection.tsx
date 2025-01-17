import React, { useRef, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

import RoutineCard from './RoutineCard';


const RoutineCardSectionBackground = styled.View`
  width: 100%;
  flex: 2;
  align-items: center;
`;


import { RoutineCardProps } from './types';

const RoutineCardSection: FunctionComponent<RoutineCardProps> = (props) => {

  return (
    <RoutineCardSectionBackground>

        <RoutineCard {...props} />

    </RoutineCardSectionBackground>
  );
};


export default RoutineCardSection;
