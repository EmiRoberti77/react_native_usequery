import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'eremilib';
import React from 'react';
import { View } from 'react-native';
import { TodoItem } from './models/models';
import Todo from './Todo';

const TodoList = ():React.JSX.Element => {
    const { isError, isSuccess, isPending, error , data:todoArray} = useQuery({
        queryKey: ['todolist'],
        queryFn: () => getUsers().then(success => success),
      });

    return (
        <View>
            {todoArray?.map((item:TodoItem, index:number)=>(
                <Todo key={index} todoItem={item} />
            ))}
        </View>
    )
}

export default TodoList;