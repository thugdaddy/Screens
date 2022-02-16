import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeparator } from "../components/RowItem";

const styles = StyleSheet.create({
  tinyLogo: {
    width:1360,
    height:1360,
  }
});

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{alignItems: "center", alignContent: "center"}}>
      <RowItem title="After understanding who your hostage is you realize you truly do not want to murder them, you want the money they offered from their billionaire father. You allow the hostage to call their family member and make the payment. After the payment is complete you drop the hostage off in the middle of your city and let their father know. You get away unscathed and rich as..." />

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://storage.googleapis.com/afs-prod/media/7168e34cb2c944689d6cb2843fefce0e/1000.jpeg',
        }}
      />
    </SafeAreaView>
  );
};
