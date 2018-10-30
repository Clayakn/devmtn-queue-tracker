import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import StudentPresentation from './StudentPresentation';

export default class StudentContainer extends Component {
  constructor() {
    super();
    this.state = {
        students: [{name: 'Mike'}, {name: 'Josh'}, {name: 'Brian'}, {name: 'Tyler'}],
        studentName: ""
    };
  }
  changeHandleName = (name) => {
      this.setState({
        studentName: name
      })
  }

  addStudent = () => {
      if (!this.state.studentName.length) {
          Alert.alert('Must type in name first')
          return;
      }
      this.setState({
          students: [...this.state.students, {name: this.state.studentName}],
          studentName: ''
      })
      Alert.alert('Student has been added!')
  }
  render() {
    const { students, studentName } = this.state
    return (
        <View>
            <StudentPresentation addStudent={this.addStudent} changeHandleName={this.changeHandleName} students={students} studentName={studentName}/>
        </View>
    );
  }
}
