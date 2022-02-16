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
      <RowItem title="Your capture who you do not reconize enters the room with a knife after hearing you scream, he pulls out a knife and slits your throat." />
    </SafeAreaView>
  );
};
