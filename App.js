import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GoOut from "./Screens/GoOut";
import Pro from "./Screens/Pro";
import Nutrition from "./Screens/Nutrition";
import Donate from "./Screens/Donate";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import HeaderList from "./CustomLists/HeaderList";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Order"
        activeColor="#434b56"
        inactiveColor="#a1a1a1"
        barStyle={{
          backgroundColor: "white",
          justifyContent: "center",
        }}
        shifting={false}
      >
        <Tab.Screen
          name="Order"
          component={HeaderList}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="bag" size={21} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Go Out"
          component={GoOut}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shoe-print"
                size={21}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pro"
          component={Pro}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shield-star-outline"
                size={21}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Nutrition"
          component={Nutrition}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="heart-flash"
                size={21}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Donate"
          component={Donate}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="hand-holding-heart" size={21} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
