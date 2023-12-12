import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/headings";
import ProductRow from "../components/product/productRow";

const Home = () => {
  return ( 
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}/>

          <Text style={styles.location}>Nairobi Kenya</Text>
          
          <View style={{alignItems:"flex-end", marginRight:10}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
              <TouchableOpacity>
                <Fontisto name="shopping-bag" size={24} />
              </TouchableOpacity>
          </View>

        </View>
      </View> 
      <ScrollView>
        <Welcome />
        <Carousel/>
        <Headings/> 
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}
   
export default Home;  

