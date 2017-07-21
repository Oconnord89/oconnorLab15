//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.controller('outputCtrl', function($scope, wordFactory){


$scope.retrievedWords = wordFactory.outputWords();

});
