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
        title="You hear your hostage start to scream so you grab your freshly sharpened knife and open the basement door, ready to walk downstairs and shut the the hostage up to avoid being heard."
        onPress={() => navigation.push("Go Downstairs.")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="Your hostage isn't making much noise so you go downstairs to investigate."
        onPress={() => navigation.push("You Investigate.")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
