import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../../constants";
import styles from "../product/searchTile.style";
import { useNavigation } from "@react-navigation/native";

const CartTile = () => {
    const [userId, setUserId] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserId();
    }, []);

    const getUserId = async () => {
        try {
            const id = await AsyncStorage.getItem('id');
            setUserId(id);
            getCartItems(id);
        } catch (error) {
            console.log('Error retrieving user ID:', error);
        }
    };

    const getCartItems = async (id) => {
        try {
            if (!id) {
                return;
            }
            
            const response = await fetch('http://192.168.0.109:3000/api/cart/find/65786667c3642e4ecc2a24d4');
            const data = await response.json();
            
            const cartItems = data.products;

            setCartItems(cartItems);
            setLoading(false);
            console.log('Cart items:', cartItems);
        } catch (error) {
            console.log('Error retrieving cart items:', error);
        }
    };
    const navigation = useNavigation();
    return (
        <View style={{marginTop:SIZES.xxLarge*2}}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            ) : (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', {item})}>
                         <View style={styles.image}>
                         <Image source={{ uri: item.cartItem.imageUrl }} style={styles.productImg} />
                         </View>
                         <View style={styles.textContainer}>
                            <Text style={styles.productTitle}>{item.cartItem.title}</Text>
                            <Text style={styles.supplier}>{item.cartItem.supplier}</Text>
                            <Text style={styles.supplier}>{item.cartItem.price}</Text>
                            
                            </View>
                            <View>                            
                                <Text style={styles.supplier}>{item.quantity}</Text>
                            </View>
                        </TouchableOpacity>
                        
                    )}
                />
            )}
        </View>
    );
};


export default CartTile;


 