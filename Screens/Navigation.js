import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Options from "./Options";
import Options2 from "./Options2";
import Options3 from "./Options3";
import Options4 from "./Options4";
import Options5 from "./Options5";
import Options6 from "./Options6";
import Options7 from "./Options7";
import Options8 from "./Options8";
import Options9 from "./Options9";
import Options10 from "./Options10";
import Options11 from "./Options11";


const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="One Mysterious Day" component={Options} />
    <MainStack.Screen name="Hostage" component={Options2} />
    <MainStack.Screen name="Capture" component={Options3} />
    <MainStack.Screen name="Go Downstairs." component={Options4} />
    <MainStack.Screen name="You Died Via Knife!" component={Options5} />
    <MainStack.Screen
      name="Your Capture Enters The Room."
      component={Options6}
    />
    <MainStack.Screen name="You Survive!" component={Options7} />
    <MainStack.Screen name="You Died Via Stabbing!" component={Options8} />
    <MainStack.Screen name="You Investigate." component={Options9} />
    <MainStack.Screen name="Cop Death!" component={Options10} />
    <MainStack.Screen name="Humor Them!" component={Options11} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
