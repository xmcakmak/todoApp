import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
// render
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Home Screen</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    headerText: {
      color: 'orange',
      fontSize: 35,
      fontWeight: 'bold',
      padding: 10,
    },
    flatView: {
      flex: 1,
      //backgroundColor: 'red',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  