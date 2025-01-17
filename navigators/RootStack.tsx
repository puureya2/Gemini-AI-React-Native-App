import React, { FunctionComponent } from "react";

import { colors } from "@/components/colors";

import Greeting from "@/components/Header/Greeting";
import Profile from "@/components/Header/Profile";
import Avi from "../assets/avi/avatar.png";

// Ballance back icon
import { Ionicons } from "@expo/vector-icons";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "@/screens/Welcome";
import Home from "@/screens/Home";
import Balance from "@/screens/Balance";
import Routine from "@/screens/Routine";
import CameraScreen from "@/screens/CameraScreen";

import { CardProps } from "@/components/Cards/types";


export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps;
    Routine: CardProps;
    CameraScreen: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <Stack.Navigator

            initialRouteName="Welcome"
            
            screenOptions={{

                headerStyle: {
                    backgroundColor: colors.lightgray,
                    borderBottomWidth: 0,
                    shadowColor: "transparent",
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 120,
                },

                headerTintColor: colors.secondary,

                headerRightContainerStyle: {
                    paddingRight: 25,
                },

                headerLeftContainerStyle: {
                    paddingLeft: 10,
                },

                headerRight: () => (
                    <Profile
                        img={Avi}
                        imgContainerStyle={{ backgroundColor: colors.tertiary }}
                    />
                ),
            
            }}
        >

            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="Home"
                component={Home}
                options={{ 

                    headerTitle: (props) => (
                        <Greeting
                            mainText="Hey, Kevin!"
                            subText="Welcome back."
                            {...props}
                        />
                    ),

                    headerLeft: () => <></>,

                }}
            />

            <Stack.Screen 
                name="Routine"
                component={Routine}
                options={({ route }) => ({
                    headerTitle: route.params?.routine,
                    headerTitleAlign: "center",
                    headerBackImage: (props) => (
                        <Ionicons
                            {...props}
                            name="chevron-back"
                            size={25}
                            color={colors.secondary}
                        />
                    ),
                    headerLeftContainerStyle: {
                        paddingLeft: 0,
                    },
                })}
            />

            <Stack.Screen 
                name="CameraScreen"
                component={CameraScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default RootStack;