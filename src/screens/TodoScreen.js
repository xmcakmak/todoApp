import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputBar from "../components/InputBar/InputBar";
import TodoItem from "../components/TodoItem/TodoItem";

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const renderTodo = ({ item }) => <TodoItem todo={item} />;

  const localAddress = "http://192.168.1.10:3001/todos"

  const getTodos = async () => {

    fetch(localAddress, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error(error));
  }


  const addTodo = () => {

    let todo = {id: Date.now(), title: text, status: 1}
    text.trim() !== ''
      ? setTodos([...todos, todo])
      : null;
    setText('');

    fetch(localAddress, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
  };
    

  useEffect(() => {
    getTodos();
    
  }, []);

  // render
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo Screen</Text>
      </View>
      <View>
        
      </View>
      <View style={styles.flatView}>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
      <InputBar add={addTodo} text={text} setText={setText} />
    </View>
  );
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
});
