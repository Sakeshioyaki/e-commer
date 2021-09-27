import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function handelClick() {
  console.log('clicked ');
}

export default function Card(name) {
  let isFocus = false;
  return (
    <View
      style={{
        height: 270,
        width: 170,
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        paddingHorizontal: 5,
        marginRight: 10
      }}>
      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 10}}>
                30% OFF
              </Text>
            </View>
            <View>
              <Ionicons name="heart" color="gray" />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Image
              style={{height: 140, width: 150}}
              source={require('../../Assets/imgWatch.jpeg')}
            />
          </View>
          <View style={{backgroundColor:'white', borderBottomRightRadius:10, borderBottomLeftRadius:10, marginTop: 10, paddingHorizontal: 10, height: 60}}>
            <View style={{marginTop: 10}}>
              <Text style={{color: 'gray', letterSpacing:1}}>Apple Watch - M2</Text>
            </View>
            
            <View style={{flexDirection: 'row',  marginTop: 5}}>
              <View style={{ justifyContent:'flex-end'}}>
                <Text style={{color:'black', fontWeight:'bold' }}>$140</Text>
              </View>
              <View style={{marginTop:2}}>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    color: 'gray',
                    fontSize: 11
                  }}>
                  $200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
