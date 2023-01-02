import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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