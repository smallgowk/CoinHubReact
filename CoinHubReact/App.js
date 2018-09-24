/*
 * Copyright (c) 2017 Razeware LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * Notwithstanding the foregoing, you may not use, copy, modify, merge, publish, 
 * distribute, sublicense, create a derivative work, and/or sell copies of the 
 * Software in any work that is designed, intended, or marketed for pedagogical or 
 * instructional purposes related to programming, coding, application development, 
 * or information technology.  Permission for such use, copying, modification,
 * merger, publication, distribution, sublicensing, creation of derivative works, 
 * or sale is expressly withheld.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

 'use strict';

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 // import {
 // 	createStackNavigator,
 // } from 'react-navigation';
 import SearchPage from './SearchPage';
 import SearchResults from './SearchResults';
 import PropertyView from './PropertyView';
 import MyHomeScreen from './MyHomeScreen';
 import MyNotificationsScreen from './MyNotificationsScreen';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import Icon from 'react-native-ionicons'
 // import { DrawerNavigator } from 'react-navigation';
 // import { createDrawerNavigator } from 'react-navigation';
 import { createBottomTabNavigator,
 	createStackNavigator,
 	createDrawerNavigator
 } from 'react-navigation';

// const App = createStackNavigator({
  // Home: { screen: SearchPage },
  // Results: { screen: SearchResults },
  // Property: { screen: PropertyView},

// });

const HomeStack = createStackNavigator({
	Home: { screen: SearchPage },
	Results: { screen: SearchResults },
	Property: { screen: PropertyView},
});

const SettingsStack = createStackNavigator({
	MyHomeScreen: { screen: MyHomeScreen },
	Notifications: { screen: MyNotificationsScreen },
});

const App = createBottomTabNavigator(
{
	Home: HomeStack,
	Settings: SettingsStack,
},
{
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let androidIcon;
			let iosIcon;
			if (routeName === 'Home') {
				iosIcon = focused ? "ios-add" : "ios-home";
				androidIcon = focused ? "md-home" : "md-home";
			} else if (routeName === 'Settings') {
				iosIcon = focused ? "ios-add" : "ios-add";
				androidIcon = focused ? "md-add" : "md-add";
			}

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons name={iconName} size={25} color={tintColor} />;

        return <Icon ios={iosIcon} android={androidIcon} size={25} color={tintColor}/>;
    },
}),
	tabBarOptions: {
		activeTintColor: 'red',
		inactiveTintColor: 'gray',
	},
}

);

export default App;


