// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"

// Redux
import { useSelector } from "react-redux"

// Config
import { TODO_STATUS, COLOR } from "@common/Enums"

// Style
import { styles } from "./HomeScreen.styles"

// Api
import getTodo from "@common/api/todo/getTodo"

// Common Component
import CustomButton from "@components/CustomButton/CustomButton"
import CategoryCard from "@components/CategoryCard/CategoryCard"

export default function HomeScreen({ navigation }) {

    // useSelector
    const todos = useSelector((state) => state.todo.todos)

    // useState
    const [todoCount, setTodoCount] = useState(0) 
    const [inProgressCount, setInProgressCount] = useState(0)
    const [doneCount, setDoneCount] = useState(0)
    const [completed, setCompleted] = useState(0) 

    useEffect(() => {
        getTodo()
    }, []);

    // useEffect
    useEffect(() => {
        const categoryTodo = todos.filter(todo => todo.status === TODO_STATUS.TODO).length
        const categoryInProgress = todos.filter(todo => todo.status === TODO_STATUS.IN_PROGRESS).length
        const categoryDone = todos.filter(todo => todo.status === TODO_STATUS.DONE).length

        let percentageOfCompleted = todos.length 
    
        setTodoCount(categoryTodo)
        setInProgressCount(categoryInProgress)
        setDoneCount(categoryDone)

        percentageOfCompleted = Math.ceil((categoryDone / percentageOfCompleted) * 100)
        setCompleted(percentageOfCompleted)

    }, [todos]);

    // Function
    const handleNavigateTodos = () => {
        navigation.navigate("Todos")
    }


	// render
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Home</Text>
			</View>
            <View style={styles.contentContainer}>
                <Text style={styles.insideTitle}>Category</Text>

                <View style={styles.categoryContainer}>
                    <CategoryCard color={COLOR.RED} title={"Todo"} count={todoCount} />
                    <CategoryCard color={COLOR.ORANGE} title={"InProgress"} count={inProgressCount} />
                    <CategoryCard color={COLOR.GREEN} title={"Done"} count={doneCount} />
                </View>
                <Text style={styles.insideTitle}>Status</Text>

                <View style={styles.statusBar}>          
                    <View style={[styles.activeStatusBar, { width: completed + "%" }]}>
                        <Text style={{fontWeight:"bold", width: 100, color: "#FFFFFF"}}>Completed %{completed}</Text>
                    </View>
                </View>

                <Text style={styles.insideTitle}>Total</Text>
                <CategoryCard color={COLOR.GRAY} isTotal={true} count={todos.length} />
            </View>
            <CustomButton title={"Todos"} onPress={handleNavigateTodos} />
		</View>
	)
}
