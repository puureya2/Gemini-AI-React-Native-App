import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

// types
import { TextProps } from "./types";

const RegularText: FunctionComponent<TextProps> = (props) => {
  const { textStyles, children } = props;
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default RegularText;