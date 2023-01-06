// React
import React, { useState } from "react"

// React Native
import { Modal, Pressable, Text, View } from "react-native"

// Style
import { styles } from "./CustomModal.styles"


export default function CustomModal({ title, mod, modalVisible, setModalVisible }) {
	return (
		<Modal
			//animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible)
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>{title}</Text>
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<Text style={styles.textStyle}>Tamam</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}
