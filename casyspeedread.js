var readSelection = window.getSelection();
var endingFocusNode = readSelection.focusNode.textContent;

// var start = readSelection.extentNode;
// var start = readSelection.anchorNode;
var start = readSelection.extentNode.parentNode;

var strArray = start.textContent.split(' ');
strArray;

var readSpan = ['<span style="color: green">', '</span>'];
var joinedArr = [];
var arrToStr;

strArray.forEach(function(word, i) {
  setTimeout(() => {
    readSpan.pop();
    readSpan.push(word);
    readSpan.push('</span>');
    joinedArr = [...readSpan, ...strArray.slice(++i)];
    strToArr = joinedArr.join(' ');
    start.innerHTML = strToArr;
  }, 200 * i);
});

// old code -----------------------

// var backtogether = strArray.reduce(function(acc, word) {
//   acc += `${word} `;
//   return acc;
// }, '<span style="color: red">');

// backtogether;

// for (let i = 0; i < strArray.length; i++) {
//   setTimeout(() => {
//     return strArray[i];
//   }, 1000);
// }
