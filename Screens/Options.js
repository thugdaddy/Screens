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
        title="You wake up in a mysterious room, blind folded, tired, and confused."
        onPress={() => navigation.push("Hostage")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="You hear your hostage waking up in your basement."
        onPress={() => navigation.push("Capture")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />
    </SafeAreaView>
  );
};
