import app from '../../../app';

function calcTransform(scaleSize, rotateDeg) {
  return 'scale(' + scaleSize + ') rotate(' + rotateDeg + 'deg)';
}

function calcTransition(rotateSpeed) {
  return rotateSpeed + 'ms ease all';
}

app.controller('DominoController', ['$scope', ($scope) => {
  $scope.settings = {
    dominoSize: 1,
    rotateDeg: 0,
    rotateSpeed: 500,
    rotateStep: 90
  };

  $scope.style = {
    transform: calcTransform($scope.settings.dominoSize, $scope.settings.rotateDeg),
    transition: calcTransition($scope.settings.rotateSpeed)
  };

  $scope.changeSize = function() {
    $scope.style.transform = calcTransform($scope.settings.dominoSize, $scope.settings.rotateDeg);
  };

  $scope.changeSpeed = function() {
    $scope.style.transition = calcTransition($scope.settings.rotateSpeed);
  };

  $scope.rotateLeft = function() {
    $scope.settings.rotateDeg = $scope.settings.rotateDeg - $scope.settings.rotateStep;
    $scope.style.transform = calcTransform($scope.settings.dominoSize, $scope.settings.rotateDeg);
  };

  $scope.rotateRight = function() {
    $scope.settings.rotateDeg = $scope.settings.rotateDeg + $scope.settings.rotateStep;
    $scope.style.transform = calcTransform($scope.settings.dominoSize, $scope.settings.rotateDeg);
  };
}]);
