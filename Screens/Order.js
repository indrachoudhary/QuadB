import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import HeaderList from "../CustomLists/HeaderList";
import {
 
  Entypo,
  
} from "@expo/vector-icons";
import RestaurantList from "../CustomLists/RestaurantList";
const Order = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <Entypo name="location" size={24} color="black" />
        </View>
        <View style={{ width: "80%" }}>
          <Text>Moje Chal, Lohegaon</Text>
          <Text>--------------------------------</Text>
        </View>

        <ImageBackground
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          }}
          style={{ height: 30, width: 30 }}
          imageStyle={{ borderRadius: 50 }}
        ></ImageBackground>
      </View>
      <HeaderList navigation={props.navigation} />
      <RestaurantList navigation={props.navigation} />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
  },
});
