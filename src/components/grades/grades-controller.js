import app from './../../app';
import { v4 as uuidv4 } from 'uuid';

app.controller('GradesController', ['$scope', 'gradesService', ($scope, gradesService) => {
  $scope.displayGradeModal = false;

  $scope.showGradeModal = function() {
    $scope.displayGradeModal = true;
  };

  $scope.closeModal = function() {
    $scope.displayGradeModal = false;
  };

  $scope.averageGpa = function() {
    let avg = 0;
    let count = 0;
    let gpa = 0;

    $scope.$ctrl.grades.forEach((grade) => {
      count += grade.students.length;

      grade.students.forEach((student) => {
        gpa += student.gpa;
      });
    });

    return count > 0 ? (avg + gpa / count).toFixed(2) : 0;
  };


  $scope.addGrade = function(name) {
    let id = uuidv4();
    let grade = {id, name, students: []};

    gradesService.addGrade(grade);
    $scope.displayGradeModal = false;
  };

  $scope.removeGrade = function(grade) {
    gradesService.removeGrade(grade);
  };
}]);
