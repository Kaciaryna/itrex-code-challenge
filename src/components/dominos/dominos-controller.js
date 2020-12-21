import app from '../../app';

app.controller('DominosController', ['$scope', ($scope) => {
  $scope.displayModal = false;
  $scope.dominoItem = {};

  $scope.showModal = function() {
    $scope.displayModal = true;
  };

  $scope.closeModal = function() {
    $scope.displayModal = false;
  };

  $scope.displayDomino = function() {
    return Object.keys($scope.dominoItem).length > 0;
  };

  $scope.addDomino = function(item) {
    $scope.dominoItem = item;
    $scope.displayModal = false;
  }
}]);
