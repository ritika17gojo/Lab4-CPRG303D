import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={StyleSheet.container}>
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const styles = StylesSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItem: 'center',
    justifyContent: ' center',
  },
});  

const addTask = (taskText) => {
  setTasks([...tasks,taskText]);
};

