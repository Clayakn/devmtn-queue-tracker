import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function StudentPresentation(props) {
    const { studentName, students, changeHandleName, addStudent } = props
    const displayStudents = students.map((student, index) => {
      return (
        <Text key={index} style={styles.name}>{student}</Text>
      );
    });
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
              <Button
                title='Submit'
                onPress={addStudent} 
              />
           </View>
          <View style={styles.studentContainer}>
            <Text>Student List</Text>
            {displayStudents}
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row"
  },
  studentContainer: {
    flexDirection: "row",
  },
  name: {
    color: "blue",
    marginLeft: 15
  },
});
