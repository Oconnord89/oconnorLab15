var app = angular.module('myModule');

app.factory('wordFactory', function(){

var words = {};

return {
  inputWords: inputWords,
  outputWords: outputWords
  }

  function inputWords(wordsObj) {
    words=wordsObj;

  }

  function outputWords() {
    return words;

}
});
