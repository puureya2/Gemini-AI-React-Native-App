import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";

// components
import RegularText from "../Texts/RegularText";
import RegularButton from "../Buttons/RegularButton";
import { colors } from "../colors";

// Styled container component for permissions button
const PermissionsPromptContainer = styled.TouchableOpacity`
align-items: center;
width: 100%;
flex: 1;
`;


interface PermissionsPromptProps {
  onPress: () => void;
}


const PermissionsPrompt: React.FC<PermissionsPromptProps> = ({ onPress }) => {
  return (
    <PermissionsPromptContainer>
      <RegularText>
        We need your permission to use the camera
      </RegularText>
      <RegularButton
        btnStyles={{ marginTop: 20 }}
        onPress={onPress}
      >
        Grant Permission
      </RegularButton>
    </PermissionsPromptContainer>
  );
};

export default PermissionsPrompt;
