// React
import React, { useState, useEffect } from "react"

// React Native
import { FlatList, Text, View } from "react-native"

// Style
import { styles } from "./TodoScreen.styles"


// Common Component
import InputBar from "../../components/InputBar/InputBar"
import TodoItem from "../../components/TodoItem/TodoItem"
import CustomCheckBox from "../../components/CheckBox/CustomCheckBox"

export default function TodoScreen() {

    // useState 
	const [check1, setCheck1] = useState(true)
	const [check2, setCheck2] = useState(true)
	const [check3, setCheck3] = useState(true)
	const [filteredTodos, setfilteredTodos] = useState([])
	const [text, setText] = useState("")
	const [todos, setTodos] = useState([])

    // Definition
    const STATUS_TODO = 1, 
          STATUS_INPROGRESS = 2, 
          STATUS_DONE = 3

	const localAddress = "http://192.168.1.11:3001/todos"
	const renderTodo = ({ item }) => <TodoItem todo={item} remove={removeTodo} />

    // useEffect
    useEffect(() => {
		checkStatus()
	},[check1,check2,check3])

	useEffect(() => {
		getTodos()
	}, [])

    // Function
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
            check1 ? STATUS_TODO : null,
            check2 ? STATUS_INPROGRESS : null,
            check3 ? STATUS_DONE : null
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
                    <CustomCheckBox checked={check1} title={"To Do"} 
                        onPress={() => {
                            setCheck1(!check1)
                        }}
                    />
                    <CustomCheckBox checked={check2} title={"In Progress"} 
                        onPress={() => {
                            setCheck2(!check2)
                        }}
                    />
                    <CustomCheckBox checked={check3} title={"Done"} 
                        onPress={() => {
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

