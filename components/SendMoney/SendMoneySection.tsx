import React, { useRef, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';

// components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

import SendMoneyItem from './SendMoneyItem';


const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-left: 25px;
  padding-right: 25px;
`;

const TextButton = styled.TouchableOpacity``;


import { SendMoneySectionProps } from './types';

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['25%', '50%'];

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      backgroundStyle={{
        backgroundColor: colors.lightgray,
        borderRadius: 25,
      }}
      handleStyle={{
        backgroundColor: colors.lightgray,
        borderRadius: 25,
      }}
    >
      <BottomSheetScrollView
        contentContainerStyle={{
          paddingHorizontal: 25,
          paddingTop: 15,
        }}
      >
        <SendMoneySectionBackground>
          <SendMoneyRow>
            <RegularText
              textStyles={{
                fontSize: 19,
                color: colors.secondary,
                paddingBottom: 5,
              }}
            >
              Choose a coach
            </RegularText>
            <TextButton onPress={() => alert('Add')}>
              <SmallText
                textStyles={{
                  fontWeight: "bold",
                  color: colors.tertiary,
                }}
              >
                +Add
              </SmallText>
            </TextButton>
          </SendMoneyRow>

          <SendMoneyList
            data={props.data}
            contentContainerStyle={{
              alignItems: "center", // Align items for horizontal scrolling
              paddingRight: 25,
            }}
            horizontal={true} // Enable horizontal scrolling
            showsHorizontalScrollIndicator={false} // Optional: Hide the scroll indicator
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <SendMoneyItem {...item} />}
          />
        </SendMoneySectionBackground>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};


export default SendMoneySection;


// return (

//   <BottomSheet
//     ref={sheetRef}
//     index={0} // Index of the initial snap point
//     snapPoints={snapPoints}
//     enablePanDownToClose={true} // Optional: Allow swiping down to close
//     backgroundStyle={{
//       backgroundColor: colors.lightgray,
//       borderRadius: 25,
//     }}
//     handleStyle={{
//       backgroundColor: colors.lightgray,
//       borderRadius: 25,
//     }}
//   >

//     <SendMoneySectionBackground>
//       {/* Header Row */}
//       <SendMoneyRow>

//         <RegularText
//           textStyles={{
//             fontSize: 19,
//             color: colors.secondary,
//           }}
//         >
//           Send money to
//         </RegularText>

//         <TextButton onPress={() => alert('Add')}>
//           <SmallText
//             textStyles={{
//               fontWeight: 'bold',
//               color: colors.tertiary,
//             }}
//           >
//             +Add
//           </SmallText>
//         </TextButton>

//       </SendMoneyRow>

//       {/* List of Send Money Items */}
//       <SendMoneyList
//         data={props.data}
//         contentContainerStyle={{
//           alignItems: 'flex-start',
//         }}
//         horizontal={false}
//         showsVerticalScrollIndicator={false}
//         numColumns={3}
//         keyExtractor={({ id }: any) => id.toString()}
//         renderItem={({ item }: any) => <SendMoneyItem {...item} />}
//       />

//     </SendMoneySectionBackground>

//   </BottomSheet>

// );