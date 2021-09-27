import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function decrement(quanlity) {
    quanlity -= 1;
    console.log('clicked ');
  }
  
function Increment(quanlity){
    quanlity+=1;
    console.log('clicked ');
  }

export default function CardItem({name, quanlity, size, price}) {
  return (
    <View
      style={{
        height: 120,
        width: '100%',
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        marginTop: 15
      }}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{marginLeft: 15, alignItems: 'center'}}>
            <Image
              style={{height: 100, width: 80, borderRadius: 10}}
              source={require('../../Assets/imgWatch.jpeg')}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 15,
              justifyContent: 'center',
              paddingVertical: 5,
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontWeight: '500',
                  color: 'black',
                  letterSpacing: 1,
                  fontSize: 14,
                }}>
                {name}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'gray', letterSpacing: 1, fontSize:12}}>
                Size :{size}
              </Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                    letterSpacing: 1,
                  }}>
                  ${price}
                </Text>
              </View>
              <View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
