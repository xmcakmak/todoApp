// React Native 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Component 
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import TodoScreen from "./src/screens/TodoScreen/TodoScreen"


const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Todos" component={TodoScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

