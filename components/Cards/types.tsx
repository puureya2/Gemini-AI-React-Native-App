import { ImageSourcePropType } from "react-native";


export interface CardProps {
  id: number;
  routine: string;
  equipment: string;
  date: string;
  img: ImageSourcePropType;
}


export interface CardSectionProps {
    data: Array<CardProps>;
}