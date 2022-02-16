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
        title="You try to attack your capture."
        onPress={() => navigation.push("You Died Via Stabbing!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="You ask your capture where you are and what is going on, then explain your father is a billionaire who will pay for your release."
        onPress={() => navigation.push("You Survive!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />
    </SafeAreaView>
  );
};
