import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaFrameContext, SafeAreaInsetsContext, SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Cart </Text>
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({});