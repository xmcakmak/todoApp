// React
import React, { useState, useEffect } from "react"

// React Native
import { FlatList, Text, View } from "react-native"

// Config
import { TODO_STATUS } from "../../common/Enums"

// Style
import { styles } from "./TodoScreen.styles"

// Common Component
import InputBar from "../../components/InputBar/InputBar"
import TodoItem from "../../components/TodoItem/TodoItem"
import CustomCheckBox from "../../components/CheckBox/CustomCheckBox"

export default function TodoScreen() {

    // useState 
	const [checkTodo, setCheckTodo] = useState(true)
	const [checkInProgress, setCheckInProgress] = useState(true)
	const [checkDone, setCheckDone] = useState(true)
	const [filteredTodos, setfilteredTodos] = useState([])
	const [text, setText] = useState("")
	const [todos, setTodos] = useState([])

    // Definition
	const localAddress = "http://192.168.1.11:3001/todos"

    // useEffect
    useEffect(() => {
		checkStatus()
	},[checkTodo,checkInProgress,checkDone])

	useEffect(() => {
		getTodos()
	}, [])

    // Function
    const renderTodo = ({ item }) => <TodoItem todo={item} remove={removeTodo} />

	const getTodos = async () => {
		fetch(localAddress, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setTodos(json)
				setfilteredTodos(json)
			})
			.catch((error) => console.error(error))
	}

	const addTodo = () => {
		let todo = { id: Date.now(), title: text, status: 1 }
		text.trim() !== "" ? setTodos([...todos, todo]) : null
		setText("")

		fetch(localAddress, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err))
	}

	const removeTodo = (todoId) => {
		
	}

    const checkIsInclude = (checkTodoItem) =>{
        const checks_array = [
            checkTodo ? TODO_STATUS.TODO : null,
            checkInProgress ? TODO_STATUS.IN_PROGRESS : null,
            checkDone ? TODO_STATUS.DONE : null
        ]
        if(checks_array.includes(checkTodoItem.status)){
            return checkTodoItem
        }
    }

	const checkStatus = () => {
        const result = todos.filter(checkIsInclude)
        setfilteredTodos(result)
    }

	// Render
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Todo Screen</Text>      
			</View>

			<View style={styles.checkbox_container}>
                    <CustomCheckBox checked={checkTodo} title={"To Do"} 
                        onPress={() => {
                            setCheckTodo(!checkTodo)
                        }}
                    />
                    <CustomCheckBox checked={checkInProgress} title={"In Progress"} 
                        onPress={() => {
                            setCheckInProgress(!checkInProgress)
                        }}
                    />
                    <CustomCheckBox checked={checkDone} title={"Done"} 
                        onPress={() => {
                            setCheckDone(!checkDone)
                        }}
                    />         
			</View>
            
			<View style={styles.flatView}>
				<FlatList data={filteredTodos} renderItem={renderTodo} />
			</View>
			<InputBar add={addTodo} text={text} setText={setText} />
		</View>
	)
}

