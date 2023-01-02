// React
import React from "react"

// Style
import { styles } from "./CustomCheckBox.styles"

// Library
import { CheckBox } from '@rneui/themed';


const CustomCheckBox = ({ title, onPress, checked }) => (
	<CheckBox
					containerStyle={styles.checkbox}
					checkedColor={"#FFFFFF"}
					uncheckedColor={"#FFFFFF"}
					textStyle={{color:"#FFFFFF"}}
					center
					title={title}
					checked={checked}
					onPress={onPress}
				/>
)

export default CustomCheckBox
