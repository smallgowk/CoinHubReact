'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ActivityIndicator,
	Image,
} from 'react-native';

type Props = {};

export default class MyNotificationsScreen extends Component<Props> {
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: ({ tintColor }) => (
			<Image
			source={require('./Resources/house.png')}
			style={[styles.icon, {tintColor: tintColor}]}
			/>
			),
	};

	render() {
		// return (
		// 	<Button
		// 	onPress={() => this.props.navigation.goBack()}
		// 	title="Go back home"
		// 	/>
		// 	);
		return (
			// return (
			// <Button
			// onPress={() => this.props.navigation.navigate('Home')}
			// title="Go to notifications"
			// />
			// );
			<View>
			
			<Text>Test</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
	},
});