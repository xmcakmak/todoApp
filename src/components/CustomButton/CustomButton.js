// React Native 
import { TouchableOpacity, Text,  } from "react-native"

// Style
import { styles } from "./CustomButton.styles"

export default function CustomButton({ title, onPress, style }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.kaydetBtn]}>
            <Text style={styles.kaydetBtnText}>{title}</Text>
        </TouchableOpacity>
    )
}