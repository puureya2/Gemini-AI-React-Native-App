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


const ButtonSection: FunctionComponent = () => {
    return (

        <ButtonSectionBackground>
            <RegularButton btnStyles={{ width: "50%" }} onPress={() => {}}>
                Cancel <Ionicons name="card" size={17} color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>

    );
};

export default ButtonSection;