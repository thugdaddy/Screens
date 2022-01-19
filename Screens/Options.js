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

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        title="My School's Webpage"
        onPress={() => Linking.openURL("https://www.avonoldfarms.com")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="My Github Webpage"
        onPress={() => Linking.openURL("https://thugdaddy.github.io")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="My Dad's Company"
        onPress={() => Linking.openURL("http://fourninedesign.com")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />
    </SafeAreaView>
  );
};
