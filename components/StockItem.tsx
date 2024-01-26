import { View,  Text, Alert } from "react-native";
import PropTypes from 'prop-types';
import { FC } from "react";

interface StockItemProps {
    name:string;
    price:number;
    click:()=>void;
}

const StockItem:FC<StockItemProps> = ({name, price, click}) => {
    return (
        <View style={{padding:10, marginTop:10, zIndex:2}}>
            <Text onPress={()=>click()}>{name}</Text>
            <Text>{price}</Text>
        </View>
    )
}
 export default StockItem;