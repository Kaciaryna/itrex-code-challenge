import app from './../../../app';
import { v4 as uuidv4 } from 'uuid';

app.controller('GradeController', ['$scope', ($scope) => {
  $scope.clearForm = function() {
    $scope.studentName = undefined;
    $scope.studentGpa = undefined;

    $scope.gpa.$setUntouched();
  };

  $scope.addStudent = function(name, gpa) {
    const id = uuidv4();
    $scope.$ctrl.grade.students.push({id, name, gpa: parseFloat(gpa)});

    $scope.clearForm();
  };

  $scope.removeStudent = function(student) {
    $scope.gpa.$setUntouched();

    $scope.$ctrl.grade.students = $scope.$ctrl.grade.students.filter(st => st.id !== student.id);
  }
}]);
