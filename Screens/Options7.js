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
      <RowItem title="After explaining to your capture just how rich your father truly is, he commands you to call him on a cellphone, after you speak with your father he wire transfers your capture $900k and you are released the next day." />
    </SafeAreaView>
  );
};
