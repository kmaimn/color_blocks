colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function ($scope, DataFactory) {
  console.log("settings controller running");

  $scope.dataFactory = DataFactory;
  $scope.colors = $scope.dataFactory.colorArray;
  $scope.choices = $scope.dataFactory.choicesArray;

  $scope.addColor = function (display) {
    $scope.dataFactory.addColor($scope.newColor);
    $scope.newColor = '';
  }

}]);
