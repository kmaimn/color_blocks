colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function ($scope, DataFactory) {
  console.log("settings controller running");

  //define my data factory and connectd data factory return items to the controller/scope;
  $scope.dataFactory = DataFactory;
  $scope.colors = $scope.dataFactory.colorArray;
  $scope.choices = $scope.dataFactory.choicesArray;

  //call the function addColor and pass in newColor selected; set new color to an empty value;
  $scope.addColor = function (display) {
    $scope.dataFactory.addColor($scope.newColor);
    $scope.newColor = '';
  }

}]);
