import { FC } from "react"
import { TodoItem } from "./models/models"
import { Text, View } from "react-native"


interface TodoProps{
    todoItem:TodoItem
}

const Todo:FC<TodoProps> =({todoItem})=> {
    const {title, id, completed } = todoItem
    return (
        <View style={{padding:5, marginBottom:5, marginTop:5, backgroundColor:'gray'}}>
            <Text>{title}</Text>
            <Text>{id}</Text>
            <Text>{completed ? 'Complteted' : "Not Completed"}</Text>
        </View>
    )
}

export default Todo