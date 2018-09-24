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

export default class MyHomeScreen extends Component<Props> {
	static navigationOptions = {
		drawerLabel: 'Home',
		drawerIcon: ({ tintColor }) => (
			<Image
			source={require('./Resources/house.png')}
			style={[styles.icon, {tintColor: tintColor}]}
			/>
			),
	};

	render() {
		return (
			<Button
			onPress={() => this.props.navigation.navigate('Notifications')}
			title="Go to notifications"
			/>
			);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
	},
});