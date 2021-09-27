import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import IteamCategori from './card.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card from './card.js';

const Home = () => {
  let listCategoris = [
    'tshirt',
    'tag',
    'paypal',
    'receipt',
    'gem',
    'bell',
    'couch',
    'cookie',
    'coffee',
  ];
  return (
    <View
      style={{
        flexDirection: 'column',
        marginTop: 50,
        paddingHorizontal: 18,
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1}}>
          <Ionicons name="settings" size={20} />
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Ionicons name="search" size={20} />
        </View>
      </View>
      <View style={{flexDirection: 'column', flex: 1, marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hello Rocky </Text>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../Assets/Care.png')}
          />
        </View>
        <View>
          <Text style={{color: 'gray'}}>Let's get somthings?</Text>
        </View>
      </View>

      <View style={{flex: 3}}>
        <ScrollView
          style={{}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{marginRight: 15}}>
            <Image
              style={{height: 180, width: 300}}
              source={require('../../Assets/off.jpeg')}
            />
          </View>
          <View style={{marginRight: 15}}>
            <Image
              style={{height: 180, width: 300}}
              source={require('../../Assets/off.jpeg')}
            />
          </View>
          <View style={{marginRight: 15}}>
            <Image
              style={{height: 180, width: 300}}
              source={require('../../Assets/off.jpeg')}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 2}}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: 'black', fontWeight: '600'}}>
                Top Categoris
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{color: '#EB6300', fontWeight: 'bold'}}>
                  {' '}
                  SEE ALL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <ScrollView
              style={{}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {listCategoris.map(item => {
                return (
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: '#ebebeb',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      marginRight: 15,
                    }}>
                    <FontAwesome5 name={item} color="gray" size={20} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{flex: 5}}>
        <ScrollView
          style={{}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
