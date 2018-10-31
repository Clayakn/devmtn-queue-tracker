import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList } from 'react-native';

export default function StudentPresentation(props) {
    const { studentName, students, changeHandleName, addStudent } = props
    return (
        <View>
           <Text>New Name: {studentName}</Text>
           <View style={styles.inputContainer}>
              <TextInput 
                  placeholder="Type in name here"
                  value={studentName}
                  onChangeText={changeHandleName}
                  style={{width: 150}}
              />
              <TouchableHighlight
                style={styles.submitButton}
                onPress={addStudent} 
                underlayColor={'yellow'}
              >
              <Text>Submit</Text>
              </TouchableHighlight>
           </View>
          <Text>Student List</Text>
          <View>
            <FlatList 
            data={students}
            renderItem={({item}) => <Text style={styles.name}>{item.name}</Text>}
            keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row"
  },
  name: {
    color: "blue",
  },
  submitButton: {
    backgroundColor: "#DDDDDD",
    width: 75,
    height: 20,
    alignItems: "center"
  },
});
