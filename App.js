import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Task from './components/Task';
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks...</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: RFValue(10),
    paddingHorizontal: RFValue(20),
    flex: 1,
    paddingTop: RFValue(80),
  },

  sectionTitle: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: RFValue(20),
  },

  items: {
    flex: 1,
    marginTop: RFValue(20),
  },

  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: RFValue(20),
    marginBottom: RFValue(20),
  },

  input: {
    flex: 1,
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(15),
    backgroundColor: '#FFF',
    borderRadius: RFValue(30),
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginRight: RFValue(10),
  },

  addWrapper: {
    width: RFValue(60),
    height: RFValue(60),
    backgroundColor: '#FFF',
    borderRadius: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addText: {
    fontSize: RFValue(30),
  },
});