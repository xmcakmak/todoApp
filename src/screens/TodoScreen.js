import React, { useState, useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { CheckBox } from "@rneui/themed"

import InputBar from "../components/InputBar/InputBar"
import TodoItem from "../components/TodoItem/TodoItem"

export default function TodoScreen() {
	const [todos, setTodos] = useState([])
	const [filteredTodos, setfilteredTodos] = useState([])
	const [text, setText] = useState("")
	const [check1, setCheck1] = useState(true)
	const [check2, setCheck2] = useState(true)
	const [check3, setCheck3] = useState(true)

	const renderTodo = ({ item }) => <TodoItem todo={item} remove={removeTodo} />

	const localAddress = "http://192.168.1.15:3001/todos"

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
        const STATUS_TODO = 1, STATUS_INPROGRESS = 2, STATUS_DONE = 3
        const checks_array = [
            check1 ? STATUS_TODO : null,
            check2 ? STATUS_INPROGRESS : null,
            check3 ? STATUS_DONE : null
        ]
        //console.log("check arr:", checks_array)
        if(checks_array.includes(checkTodoItem.status)){
            return checkTodoItem
        }
    }

	const checkStatus = () => {
        const result = todos.filter(checkIsInclude)
        setfilteredTodos(result)
    }

	useEffect(() => {
		checkStatus()
	},[check1,check2,check3])

	useEffect(() => {
		getTodos()
	}, [])

	// render
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Todo Screen</Text>
			</View>
			<View style={styles.checkbox_container}>
				<CheckBox
					containerStyle={styles.checkbox}
					checkedColor="#FFFFFF"
					uncheckedColor="#FFFFFF"
					textStyle={{color:"#FFFFFF"}}
					center
					title="To Do"
					checked={check1}
					onPress={() => {
						setCheck1(!check1)        
					}}
				/>
				<CheckBox
					containerStyle={styles.checkbox}
					checkedColor="#FFFFFF"
					uncheckedColor="#FFFFFF"
					textStyle={{color:"#FFFFFF"}}
					center
					title="In Progress"
					checked={check2}
					onPress={() => {                
                        setCheck2(!check2)
                    }}
				/>
				<CheckBox
					containerStyle={styles.checkbox}
					checkedColor="#FFFFFF"
					uncheckedColor="#FFFFFF"
					textStyle={{color:"#FFFFFF"}}
					center
					title="Done"
					checked={check3}
					onPress={() =>{
                        setCheck3(!check3)
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
	},
	headerText: {
		color: "orange",
		fontSize: 35,
		fontWeight: "bold",
		padding: 10,
	},
	flatView: {
		flex: 1,
		//backgroundColor: 'red',
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
	checkbox_container: {
		height: 60,
		backgroundColor: "#64ae51",
		flexDirection: "row",
		marginBottom: 50,
		borderRadius: 10,
	},
	checkbox: {
		backgroundColor: "#64ae51",
		//marginLeft: -15,
		width: 120,
	},
})
