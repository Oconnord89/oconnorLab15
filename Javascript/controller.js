//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, wordFactory, $location) {

  $scope.submitWords = function(wordsObj) {
  wordFactory.inputWords(wordsObj);
  $location.path('/output');

};

});
