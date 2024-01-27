import { FC } from "react"
import { TodoItem } from "./models/models"
import { Text, View } from "react-native"
import { useContext } from "react"
import { AppState, ThemeContext } from "./ThemeContext"

interface TodoProps{
    todoItem:TodoItem
}

const Todo:FC<TodoProps> =({todoItem})=> {
    const state:AppState = useContext(ThemeContext);
    const {isDarkMode} = state;
    
    const {title, id, completed } = todoItem
    return (
        <View style={{padding:5, marginBottom:5, marginTop:5, backgroundColor:'gray'}}>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>{title}</Text>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>{id}</Text>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>{completed ? 'Complteted' : "Not Completed"}</Text>
        </View>
    )
}

export default Todo