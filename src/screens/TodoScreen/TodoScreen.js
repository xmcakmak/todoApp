// React
import React, { useState, useEffect } from "react"

// React Native
import {
	FlatList,
	Text,
	View,
	ActivityIndicator,
	Modal,
	Pressable,
} from "react-native"

// Redux
import { useSelector } from "react-redux"

// Library
import { Icon } from "@rneui/themed"

// Config
import { TODO_STATUS, API_STATUS } from "../../common/Enums"

// Style
import { styles } from "./TodoScreen.styles"

// Api
import getTodo from "../../common/api/todo/getTodo"
import postTodo from "../../common/api/todo/postTodo"
import deleteTodo from "../../common/api/todo/deleteTodo"

// Common Component
import InputBar from "../../components/InputBar/InputBar"
import TodoItem from "../../components/TodoItem/TodoItem"
import CustomCheckBox from "../../components/CheckBox/CustomCheckBox"
import { TouchableOpacity } from "react-native"

export default function TodoScreen({ navigation }) {
	// useSelector
	const todos = useSelector((state) => state.todo.todos)
	const todosApiStatus = useSelector((state) => state.todo.getTodosApiStatus)
	const postTodoApiStatus = useSelector(
		(state) => state.todo.postTodoApiStatus,
	)
    const deleteTodoApiStatus = useSelector((state) => state.todo.deleteTodoApiStatus)

	// useState
	const [checkTodo, setCheckTodo] = useState(true)
	const [checkInProgress, setCheckInProgress] = useState(true)
	const [checkDone, setCheckDone] = useState(true)
	const [modalVisible, setModalVisible] = useState(false)

	const [text, setText] = useState("")
	const [filteredTodos, setfilteredTodos] = useState([])

	// useEffect
	useEffect(() => {
		getTodo()
		checkStatus()
	}, [postTodoApiStatus, deleteTodoApiStatus])

	useEffect(() => {
		checkStatus()
	}, [checkTodo, checkInProgress, checkDone])

	useEffect(() => {
		setfilteredTodos(todos)
	}, [todos])

	// Function
	const renderTodo = ({ item }) => (
		<TodoItem todo={item} remove={removeTodo} />
	)

	const addTodo = () => {
		if (text.length > 0) {
			postTodo({ title: text, status: TODO_STATUS.TODO })
			setText("")
		} else {
			setModalVisible(true)
		}
	}

	const removeTodo = (todoId) => {
        deleteTodo(todoId)
    }

	const checkIsInclude = (checkTodoItem) => {
		const checks_array = [
			checkTodo ? TODO_STATUS.TODO : null,
			checkInProgress ? TODO_STATUS.IN_PROGRESS : null,
			checkDone ? TODO_STATUS.DONE : null,
		]
		if (checks_array.includes(checkTodoItem.status)) {
			return checkTodoItem
		}
	}

	const checkStatus = () => {
		const result = todos.filter(checkIsInclude)
		setfilteredTodos(result)
	}

	const navigateBack = () => {
		navigation.navigate("Home")
	}

	// Render
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerLeft}>
					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={navigateBack}
					>
						<Icon
							color="orange"
							name="arrow-left"
							type="font-awesome"
							style={{
								width: 50
							}}
						/>
					</TouchableOpacity>
					<Text style={styles.headerText}>Todos</Text>
				</View>
				<Text style={styles.headerText}>{filteredTodos.length}</Text>
			</View>

			<View style={styles.checkbox_container}>
				<CustomCheckBox
					checked={checkTodo}
					title={"To Do"}
					onPress={() => {
						setCheckTodo(!checkTodo)
					}}
				/>
				<CustomCheckBox
					checked={checkInProgress}
					title={"In Progress"}
					onPress={() => {
						setCheckInProgress(!checkInProgress)
					}}
				/>
				<CustomCheckBox
					checked={checkDone}
					title={"Done"}
					onPress={() => {
						setCheckDone(!checkDone)
					}}
				/>
			</View>
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
						<Text style={styles.modalText}>
							Metin girmelisiniz!
						</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Tamam</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

			<View style={styles.flatView}>
				{todosApiStatus === API_STATUS.REQUEST ? (
					<ActivityIndicator size="large" color={"#64ae51"} />
				) : (
					<FlatList data={filteredTodos} renderItem={renderTodo} />
				)}
			</View>
			<InputBar add={addTodo} text={text} setText={setText} />
		</View>
	)
}
