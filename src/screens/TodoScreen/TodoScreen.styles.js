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
        headerLeft: {
            flexDirection: "row",
            alignItems: "center",
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
            marginBottom: 15,
            borderRadius: 10,
        },
        checkbox: {
            backgroundColor: "#64ae51",
            //marginLeft: -15,
            width: 120,
        },
        // Modal
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
          },
          modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          button: {
            borderRadius: 5,
            padding: 10,
            elevation: 2
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
          buttonClose: {
            backgroundColor: "orange",
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center"
          }
    })