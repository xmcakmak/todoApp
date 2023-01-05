// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"

// Redux
import { useSelector } from "react-redux"

// Config
import { TODO_STATUS } from "@common/Enums"

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
    const [categoryTodoCount, setCategoryTodoCount] = useState(0)
    const [categoryInProgressCount, setCategoryInProgressCount] = useState(0)
    const [categoryDoneCount, setCategoryDoneCount] = useState(0)
    const [completed, setCompleted] = useState(0)

    useEffect(() => {
        getTodo()
    }, []);

    // useEffect
    useEffect(() => {
        let categoryTodo = 0
        let categoryInProgress = 0
        let categoryDone = 0
        let completedStatus = todos.length
        todos.map((todo) =>{
            if(todo.status === TODO_STATUS.TODO){
                categoryTodo += 1
            } else if(todo.status === TODO_STATUS.IN_PROGRESS){
                categoryInProgress += 1
            } else {
                categoryDone += 1
            }
        })
        setCategoryTodoCount(categoryTodo)
        setCategoryInProgressCount(categoryInProgress)
        setCategoryDoneCount(categoryDone)

        completedStatus = Math.ceil((categoryDone / completedStatus) * 100)
        setCompleted(completedStatus)

    }, [todos]);


	// render
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Home</Text>
			</View>
            <View style={{ flex: 1, backgroundColor: "#80808054", borderRadius: 15, padding: 25, marginBottom: 25 }}>
                <Text style={styles.insideTitle}>Category</Text>

                <View style={styles.categoriesContainer}>
                    <CategoryCard color={"red"} title={"Todo"} count={categoryTodoCount} />
                    <CategoryCard color={"orange"} title={"InProgress"} count={categoryInProgressCount} />
                    <CategoryCard color={"green"} title={"Done"} count={categoryDoneCount} />
                </View>
                <Text style={styles.insideTitle}>Status</Text>

                <View style={styles.statusBar}>          
                    <View style={[styles.activeStatusBar, { width: completed + "%" }]}>
                        <Text style={{fontWeight:"bold", width: 100, color: "#FFFFFF"}}>Completed %{completed}</Text>
                    </View>
                </View>

                <Text style={styles.insideTitle}>Total</Text>
                <CategoryCard color={"gray"} title={"asd"} isTotal={true} count={todos.length} />
            </View>
            <CustomButton title={"Todos"} onPress={() => navigation.navigate("Todos")} />
		</View>
	)
}
