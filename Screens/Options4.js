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
      <RowItem title="After walking downstairs to the hysteric hostage you grab your knife and slide it acorss their throat beleiving you saved yourself from any trouble. Little did you know your neighbor head the screams and reported it to the police 15 minutes earlier, as soon as you slit his throat the police barge into the house and riddle your body with bullets." />
    </SafeAreaView>
  );
};
