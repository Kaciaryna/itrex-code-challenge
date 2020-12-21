import app from './../../../app';

app.controller('GradeModalController', ['$scope', ($scope) => {
  $scope.clearForm = function() {
    $scope.gradeName = '';
    $scope.gradeForm.gradeName.$setUntouched();
  };

  $scope.add = function(name) {
    $scope.$ctrl.onAdd({name: name});
    $scope.clearForm();
  };

  $scope.cancel = function() {
    $scope.$ctrl.onCancel();
    $scope.clearForm();
  }
}]);
