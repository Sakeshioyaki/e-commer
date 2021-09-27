import React from "react";
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HeaderC () {
    return (
        <View style={{flexDirection: 'row', alignContent:'space-between'}}>
            <View>
                <Icon name='settings'/>
            </View>
            <View>
                <Icon name ='search'/>
            </View>
        </View>
    );
}