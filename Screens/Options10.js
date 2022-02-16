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
      <RowItem title="For weeks you get away with your crime, until one day you get a knock on the door from a police officer. The officer asks to enter and you let him out of nervousness. Your house reaks of rotting body, the officer instantly gets suspicous and draws his weapon, you try to stab grab a knife but he shoots you in the head." />
    </SafeAreaView>
  );
};
