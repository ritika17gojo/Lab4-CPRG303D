import React, {useState} from 'react';
import {TextInput, Button, StyleSheet, View} from 'react-native';

function ToDoForm({addTask}) {
    const [taskText, setTaskText] = useState('');

    return (
        <View>
            <TextInput
            style={StyleSheet.input}
            placeholder="Add a new task..."
            onChangeText={(test) => setTaskText(text)}
            value={taskText}
            />
            <Button
            title="Add Task"
            onPress={() => {
                addTask(taskText);
                setTaskText(''); 
            }}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor:'#ccc',
        padding:10,
        marginBottom:10,
    },
});

export default ToDoForm;