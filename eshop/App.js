/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Home from './Screens/Home';
 import BottomTab from './Navigation/BottomTab';
 import Cart from './Screens/Cart';
 import FavoriteProducts from './Screens/FavoriteProduct';
 import Profile from './Screens/Profile';
 import {NavigationContainer} from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import HeaderC from './Navigation/Hearder';
 
 const Tab = createBottomTabNavigator();

 var showName = false;
 
 const App: () => Node = () => {
  Ionicons.loadFont().then();
   return (
  //    <NavigationContainer >
  //      <Tab.Navigator
  //      initialRouteName="Home"
  //      screenOptions={({route}) => ({
  //        tabBarIcon: ({color, size, focused}) => {
  //          let iconName;
 
  //          if (route.name === 'Home') {
  //            iconName = 'home';
  //          } else if (route.name === 'Cart') {
  //            iconName = 'cart';
  //          } else if (route.name === 'FavoriteProducts') {
  //            iconName = 'heart';
  //          } else if (route.name === 'Profile') {
  //            iconName = 'person';
  //          }
  //          if (focused) showname= true;
 
  //          return <Ionicons name={iconName} size={size} color={color} />;
  //        },
  //        tabBarActiveTintColor: '#EB6300',
  //        tabBarInactiveTintColor: 'gray',
  //      })}>
  //      <Tab.Screen name="Home" component={Home}/>
  //      <Tab.Screen name="FavoriteProducts" component={FavoriteProducts} />
  //      <Tab.Screen name="Cart" component={Cart} />
  //      <Tab.Screen name="Profile" component={Profile} />
  //    </Tab.Navigator>
  //  </NavigationContainer>
  <Cart/>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 