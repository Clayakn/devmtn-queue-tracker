import React from 'react';
import { View } from 'react-native';
import StudentPresentation from './StudentPresentation';

export default class StudentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        students: ['Mike', 'Josh', 'Brian', 'Tyler'],
        studentName: ""
    };
  }
  changeHandleName = (name) => {
      this.setState({
        studentName: name
      })
  }

  addStudent = () => {
      this.setState({
          students: [...this.state.students, this.state.studentName],
          studentName: ''
      })
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
