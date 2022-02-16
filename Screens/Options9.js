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
        title="You see your hostage is planning to attack you, you grab the blade from the back of your pants and plunge it into their chest."
        onPress={() => navigation.push("Cop Death!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="Your hostage tries to explain to you who he is so you humor them."
        onPress={() => navigation.push("Humor Them!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />
    </SafeAreaView>
  );
};
