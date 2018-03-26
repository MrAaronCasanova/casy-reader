debugger;

var readSelection = window.getSelection();
var endingNode = readSelection.focusNode.parentNode;

var startingNode = readSelection.anchorNode.parentNode;

var currentNode = startingNode || null;

function followText() {
  var strArray = currentNode.innerText.split(' ');

  var readSpan = ['<span style="color: limegreen">', '</span>'];
  var combineArrays = [];
  var arrToStr;

  strArray.forEach(function(word, i) {
    setTimeout(() => {
      readSpan.pop();
      readSpan.push(word);
      readSpan.push('</span>');
      combineArrays = [...readSpan, ...strArray.slice(++i)];
      strToArr = combineArrays.join(' ');
      currentNode.innerHTML = strToArr;
    }, 200 * i);
  });
}

// if (currentNode) {
//   followText();
// }

while (currentNode !== endingNode) {
  followText();
}
