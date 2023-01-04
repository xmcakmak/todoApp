import React, {} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TodoItem.styles';

const TodoItem = ({todo, toggle, remove}) => {
    // render
    return (
      <View>
        <TouchableOpacity
          style={[styles.active, todo.status === 1 ? styles.active : todo.status === 2 ? styles.InProgress : styles.done]}
          onLongPress={() => {
            remove(todo.id);
          }}
          onPress={() => {
            //toggle(todo.id);
          }}>
          <Text style={styles.title}>
            {todo.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default TodoItem;