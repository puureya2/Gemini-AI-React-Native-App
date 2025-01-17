import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// components
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import RegularButton from "../Buttons/RegularButton";


const ButtonSectionBackground = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  flex: 1;
`;


import { Props as CameraScreenProps } from "@/screens/CameraScreen";
import { useNavigation } from "@react-navigation/native";

const ButtonSection: FunctionComponent = () => {
    
    // Configuring navigation
    const navigation = useNavigation<CameraScreenProps["navigation"]>();

    // Navigate to Camera Screen
    const handlePress = () => {
    navigation.navigate("CameraScreen");
    };
    
    return (
        <ButtonSectionBackground>
            <RegularButton 
                btnStyles={{ width: "50%" }} 
                onPress={handlePress}
            >
                    Take A Photo  <Ionicons 
                        name="card" size={17} 
                        color={colors.white} 
                    />
            </RegularButton>
        </ButtonSectionBackground>
    );
};

export default ButtonSection;