import React, { FunctionComponent } from "react";
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

// custom components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "@/components/colors";


const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`;

const StyledImage = styled.Image.attrs({
    resizeMode: 'cover',
  })`
    height: 100%;
    width: 100%;
    border-radius: 15px;
`;


interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
};


const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>

            <StyledImage style={props.imgStyle} source={props.img} />

        </StyledView>
    );
};

export default Profile;