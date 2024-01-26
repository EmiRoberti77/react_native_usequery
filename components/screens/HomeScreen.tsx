import { useContext } from 'react'
import {View, Text} from 'react-native'
import { ThemeContext } from '../ThemeContext'


const HomeScreen = () => {
    const isDarkMode = useContext(ThemeContext);
    return (
        <View style={{
            backgroundColor: isDarkMode ? 'black' : 'white', 
            padding:5, 
            marginHorizontal:10, 
            marginVertical:10
            }}>
            <Text style={{color: isDarkMode? 'white' : 'black'}}>HELLO WELCOME</Text>
        </View>
    )

}

export default HomeScreen