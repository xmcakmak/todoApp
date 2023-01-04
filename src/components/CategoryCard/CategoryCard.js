// React Native 
import { Text, View } from "react-native"

// Style
import { styles } from "./CategoryCard.styles"

export default function CategoryCard({ color, title, count, isTotal}) {
    return(
        <View style={[styles.categoryCard, {backgroundColor: color}]}>
                {isTotal ? (
                    <Text style={styles.categoryCardCountTotal}>{count}</Text>)
                    :  (  
                    <>
                        <Text style={styles.categoryCardCount}>{count}</Text>
                        <Text style={styles.categoryCardTitle}>{title}</Text>
                    </>
                    )
            }
                       
        </View>
    )
}