// React
import React, { useState, useEffect } from "react"

// React Native
import {
	FlatList,
	Text,
	View,
	ActivityIndicator,
    TouchableOpacity
} from "react-native"

// Redux
import { useSelector } from "react-redux"

// Library
import { Icon } from "@rneui/themed"

// Config
import { TODO_STATUS, API_STATUS, COLOR, TITLE } from "@common/Enums"

// Style
import { styles } from "./TodoScreen.styles"

// Api
import getTodo from "@common/api/todo/getTodo"
import postTodo from "@common/api/todo/postTodo"
import deleteTodo from "@common/api/todo/deleteTodo"
import updateTodo from "@common/api/todo/updateTodo"

// Common Component
import InputBar from "@components/InputBar/InputBar"
import TodoItem from "@components/TodoItem/TodoItem" // List Item şeklinde isimlendir 
import CustomCheckBox from "@components/CheckBox/CustomCheckBox"
import CustomModal from "@components/Modal/CustomModal"


export default function TodoScreen({ navigation }) {
	// useSelector
	const todos = useSelector((state) => state.todo.todos)
	const todosApiStatus = useSelector((state) => state.todo.getTodosApiStatus)
	const postTodoApiStatus = useSelector(
		(state) => state.todo.postTodoApiStatus,
	)
    const deleteTodoApiStatus = useSelector((state) => state.todo.deleteTodoApiStatus)
    const updateTodoApiStatus = useSelector((state) => state.todo.updateTodoApiStatus)

	// useState
	const [statusTodo, setStatusTodo] = useState(true) 
	const [checkInProgress, setCheckInProgress] = useState(true) 
	const [checkDone, setCheckDone] = useState(true)

	const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState("")

	const [text, setText] = useState("") // 
	const [filteredTodos, setfilteredTodos] = useState([])

	// useEffect
	useEffect(() => {
		getTodo()
		checkStatus()
	}, [postTodoApiStatus, deleteTodoApiStatus, updateTodoApiStatus])

	useEffect(() => {
		checkStatus()
	}, [statusTodo, checkInProgress, checkDone])

	useEffect(() => {
		setfilteredTodos(todos)
	}, [todos])

	// Function
	const handleRenderItemCategory = ({ item }) => (
		<TodoItem todo={item} toggle={toggleTodo} remove={removeTodo} />
	)

	const addTodo = () => {
		if (text.length > 0) {
			postTodo({ title: text, status: TODO_STATUS.TODO })
			setText("")
		} else {
            setModalTitle("Todo girmelisiniz !")
			setModalVisible(true)
		}
	}

	const removeTodo = (todoId) => {
        deleteTodo(todoId)
    }

    const toggleTodo = (todo) => {
        setModalVisible(true)
        updateTodo({ todo: todo, status: TODO_STATUS.DONE }) 
    }

    const checkStatus = () => {
		const result = todos.filter(checkIsInclude)
		setfilteredTodos(result)
	}

	const checkIsInclude = (checkTodoItem) => { 
		const checks_array = [
			statusTodo ? TODO_STATUS.TODO : null,
			checkInProgress ? TODO_STATUS.IN_PROGRESS : null,
			checkDone ? TODO_STATUS.DONE : null,
		]
		if (checks_array.includes(checkTodoItem.status)) {
			return checkTodoItem
		}
	}

	const navigateBack = () => {
		navigation.navigate("Home") 
	}

    const handleSetStatusTodo = () => {
        setStatusTodo(!statusTodo)
    }

    const handleSetInProgress = () => {
        setCheckInProgress(!checkInProgress)
    }

    const handleSetDone = () => {
        setCheckDone(!checkDone) 
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
							color={COLOR.ORANGE} 
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
					checked={statusTodo}
					title={TITLE.TODO} 
					onPress={handleSetStatusTodo}
				/>
				<CustomCheckBox
					checked={checkInProgress}
					title={TITLE.IN_PROGRESS}
					onPress={handleSetInProgress}
				/>
				<CustomCheckBox
					checked={checkDone}
					title={TITLE.DONE}
					onPress={handleSetDone}
				/>
			</View>
			<CustomModal title={modalTitle} mod={false} modalVisible={modalVisible} setModalVisible={setModalVisible} /> 

			<View style={styles.flatView}>
				{todosApiStatus === API_STATUS.REQUEST ? (
					<ActivityIndicator size="large" color={COLOR.GREEN} />
				) : (
					<FlatList data={filteredTodos} renderItem={handleRenderItemCategory} />
				)}
			</View>
			<InputBar add={addTodo} text={text} setText={setText} />
		</View>
	)
}
