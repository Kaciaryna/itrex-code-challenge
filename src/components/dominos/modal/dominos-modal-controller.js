import app from './../../../app';

app.controller('DominosModalController', ['$scope', ($scope) => {
  $scope.dotsOptions = [0, 1, 2, 3, 4, 5, 6];
  $scope.item = {};

  $scope.$ctrl.$onInit = function() {
    $scope.item.topDots = $scope.$ctrl.dominoItem.topDots || undefined;
    $scope.item.bottomDots = $scope.$ctrl.dominoItem.bottomDots || undefined;
  };

  $scope.add = function() {
    $scope.$ctrl.onAdd({item: $scope.item});
  };

  $scope.cancel = function() {
    $scope.$ctrl.onCancel();
  }
}]);
