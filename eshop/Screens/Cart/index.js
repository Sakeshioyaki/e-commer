import React from "react";
import { View, Text } from "react-native";
import CardItem from "./CardItem";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";



const Cart = () => {
    return(
        <View style={{ flex: 1, paddingHorizontal: 20 , marginTop: 60}}>
            <View style={{flexDirection:'row', flex: 1}}>
                <View style={{flex: 1}}>
                    <TouchableOpacity>
                    <Ionicons name='arrow-back' color='black' size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2}}>
                    <Text style={{color:'black', fontWeight:'bold', fontSize: 20}}>My Cart</Text>
                </View>

            </View>
            <View style={{ marginTop: 20, flex: 3}}>
                <CardItem name = 'Apple Watch Series 3' size='36' quanlity={1} price= {140}/>
                <CardItem name = 'Sony ear headphone' size='M' quanlity={1} price= {50}/>
            </View>
            <View style={{flex:1}}>
          
            </View>
            
        </View>
    )
}
export default Cart;