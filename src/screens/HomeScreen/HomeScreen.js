// React
import React from "react"

// React Native
import { StyleSheet, Text, View } from "react-native"

// Style
import { styles } from "./HomeScreen.styles"

export default function HomeScreen() {
	// render
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Home Screen</Text>
			</View>
		</View>
	)
}
