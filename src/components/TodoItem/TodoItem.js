// React 
import React from "react"

// React Native
import { View, Text, TouchableOpacity } from "react-native"

// Config
import { TODO_STATUS } from "../../common/Enums"

// Style
import styles from "./TodoItem.styles"


const TodoItem = ({ todo, toggle, remove }) => {
    
    // Function
    const handleRemove = () => {
        remove(todo.id)
    }

	// render
	return (
		<View>
			<TouchableOpacity
				style={[
					styles.active,
					todo.status === TODO_STATUS.TODO 
						? styles.active
						: todo.status === TODO_STATUS.IN_PROGRESS 
						? styles.InProgress
						: styles.done,
				]}
				onLongPress={handleRemove}
			>
				<Text style={styles.title}>{todo.title}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TodoItem
