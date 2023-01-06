import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		padding: 10,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
	},
	contentContainer: {
		flex: 1,
		backgroundColor: "#80808054",
		borderRadius: 15,
		padding: 25,
		marginBottom: 25,
	},
	headerText: {
		color: "orange",
		fontSize: 35,
		fontWeight: "bold",
		padding: 10,
	},
	title: {
		fontSize: 32,
	},
	insideTitle: {
		color: "white",
		textAlign: "center",
		fontSize: 32,
		fontWeight: "bold",
		padding: 10,
	},
	categoryContainer: {
		//flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	categoryCardCount: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},
	categoryCard: {
		backgroundColor: "red",
		borderRadius: 15,
		padding: 15,
		margin: 10,
	},
	categoryCardTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},
	statusBar: {
		backgroundColor: "#414141",
		width: "100%",
		borderRadius: 15,
		overflow: "hidden",
	},
	activeStatusBar: {
		backgroundColor: "green",
		borderRadius: 0,
		padding: 15,
	},
})
