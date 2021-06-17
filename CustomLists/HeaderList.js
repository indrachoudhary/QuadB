import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import RestaurantList from "./RestaurantList";

export default function HeaderList(props) {
  const [data, setData] = useState([
    {
      name: "Healthy",
      id: "1",
      img: {
        uri: "https://assets.bonappetit.com/photos/5e8cdb60a7a01c00083b08a9/1:1/w_2560%2Cc_limit/HMONG-Potluck-Chopped-Salad.jpg",
      },
    },
    {
      name: "Pizza",
      id: "2",
      img: {
        uri: "https://www.oetker.in/Recipe/Recipes/oetker.in/in-en/pizza/image-thumb__52711__RecipeDetailsLightBox/pizza-pollo-arrosto.jpg",
      },
    },
    {
      name: "Chaat",
      id: "3",
      img: {
        uri: "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",
      },
    },
    {
      name: "Basundi",
      id: "4",
      img: {
        uri: "https://foodtrails25.com/wp-content/uploads/2020/08/basundi_recipe-500x500.jpg",
      },
    },
    {
      name: "Burger",
      id: "5",
      img: {
        uri: "https://st2.depositphotos.com/1020618/8867/i/600/depositphotos_88670080-stock-photo-close-up-of-home-made.jpg",
      },
    },
    {
      name: "Shrewbury",
      id: "6",
      img: {
        uri: "https://im.whatshot.in/img/2020/Jan/22829568-1485558084858942-2564484616985990514-o-khodayar-bakery-cropped-1-1579161792.jpg",
      },
    },
    {
      name: "Cake",
      id: "7",
      img: {
        uri: "https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg",
      },
    },
    {
      name: "Sandwich",
      id: "8",
      img: {
        uri: "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
      },
    },
  ]);

  return (
    <View style={styles.container}>
      {/*------------------------------------------Header Section--------------------------------------- */}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <Entypo name="location" size={24} color="black" />
        </View>
        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 18, color: "#434b56", fontWeight: "bold" }}>
            Moje Chal, Lohegaon
          </Text>
        </View>
        <View style={{ width: "10%", alignItems: "flex-end" }}>
          <ImageBackground
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            }}
            style={{ height: 30, width: 30 }}
            imageStyle={{ borderRadius: 50 }}
          >
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: "red",
                borderRadius: 15,
                borderWidth: 2,
                borderColor: "white",
                position: "relative",
                left: 20,
              }}
            ></View>
          </ImageBackground>
        </View>
      </View>
      {/*----------------------------------------------------SearchBar Section----------------------------------------------------------------- */}
      <View style={{ width: "100%", height: 60, paddingHorizontal: 10 }}>
        <View style={styles.search}>
          <AntDesign name="search1" size={22} color="#bf1363" />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Restaurant name, cuisine, or a dish..."
            style={{ paddingLeft: 10, width: "90%", fontSize: 15 }}
          />
        </View>
      </View>
      {/*-----------------------------------------------ScrollView----------------------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 40,
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{ width: "80%", height: 40 }}
          horizontal={true}
          contentContainerStyle={{ alignItems: "center", paddingLeft: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {/*----------------------------------------------------Max Safety------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                MAX Safety
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <MaterialCommunityIcons
                name="shield-star-outline"
                size={15}
                color="#434b56"
                style={{ marginRight: 3 }}
              />
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                PRO
              </Text>
            </View>
          </TouchableOpacity>
          {/*----------------------------------------------------Cuisines------------------------------------------------------------------------------------ */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                Cuisines
              </Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={15}
                color="#434b56"
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableOpacity>
          {/*----------------------------------------------------Rating----------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                Rating 4.0
              </Text>
              <Fontisto
                name="plus-a"
                size={11}
                color="#434b56"
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableOpacity>
          {/*---------------------------------------------------Fast Delivery---------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                Fastest Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*----------------------------------------------------Offers------------------------------------------------------------------------------------ */}
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                Offers
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*---------------------------------------------------Takeaway-------------------------------------------------------------------------------- */}
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                Takeaway
              </Text>
            </View>
          </TouchableOpacity>
          {/*---------------------------------------------------More----------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text
                style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
              >
                More
              </Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={15}
                color="#434b56"
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
        {/*----------------------------------------------------ScrollView Ends----------------------------------------------------------------------------------- */}

        {/*--------------------------------------------------------Popular----------------------------------------------------------------------------------- */}
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              paddingHorizontal: 5,
              height: 25,
              borderColor: "darkgrey",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
              left: 0,
            }}
          >
            <Ionicons
              name="ios-swap-vertical-sharp"
              size={15}
              color="#434b56"
            />
            <Text
              style={{ color: "#434b56", fontWeight: "bold", fontSize: 12 }}
            >
              Popular
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*----------------------------------------------------Flat List------------------------------------------------------------------------------------ */}

      {/*---------------------------------------------------Eat Section------------------------------------------------------------------------------------ */}
      <FlatList
        numColumns={4}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Image source={item.img} style={styles.image} />
              <Text
                style={{ fontWeight: "bold", fontSize: 14, color: "#434b56" }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
        ListHeaderComponent={({ item }) => {
          return (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "#434b56",
                marginBottom: 10,
                marginLeft: 15,
              }}
            >
              Eat what makes you happy
            </Text>
          );
        }}
        ListFooterComponent={({ item }) => {
          return (
            <View>
              <RestaurantList />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "white",
    paddingTop: 50,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  item: {
    height: 100,
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    height: 45,
    borderRadius: 10,
    margin: 6,
    borderWidth: 1,
    borderColor: "#A1A1A1",
    paddingHorizontal: 10,
  },
  scrollcomp: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 25,
    marginRight: 8,
    borderColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
