import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from "react-native";
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeparator } from "../components/RowItem";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <RowItem
        title="You yell as loud as you can for help."
        onPress={() => navigation.push("You Died Via Knife!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="You sit silently and wait in confusion."
        onPress={() => navigation.push("Your Capture Enters The Room.")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />
    </SafeAreaView>
  );
};
