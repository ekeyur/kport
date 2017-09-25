var app = angular.module('portfolio', ['angular-typed']);
app.controller('portfolioController', function($scope, $timeout, $interval) {
$scope.homeshow = false;
$scope.aboutshow = true;
$scope.portfolioshow = true;
$scope.letschatshow = true;

$scope.aboutClicked = function(){
  $scope.homeshow = true;
  $scope.aboutshow = false;
  $scope.portfolioshow = true;
  $scope.letschatshow = true;
};

$scope.homeClicked = function(){
  $scope.homeshow = false;
  $scope.aboutshow = true;
  $scope.portfolioshow = true;
  $scope.letschatshow = true;
};

$scope.portfolioClicked = function(){
  $scope.homeshow = true;
  $scope.aboutshow = true;
  $scope.portfolioshow = false;
  $scope.letschatshow = true;
};

$scope.letschateClicked = function(){
  $scope.homeshow = true;
  $scope.aboutshow = true;
  $scope.portfolioshow = true;
  $scope.letschatshow = false;
};

});
