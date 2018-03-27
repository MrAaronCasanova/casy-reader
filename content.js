// content script by default runs the js after the web page loads - allowing you to affect and manipulate the contents of the website
// because content scripts executes inside the actual webpage - debug actions like console.log are available in the main browser js console

console.log('====================================');
console.log('Chrome Extension Ready To Go!!!');
console.log('====================================');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
  // console.log(request.txt);
  // if (request.txt === 'hello') {
  //   let paragraphs = document.getElementsByTagName('p');
  //   for (el of paragraphs) {
  //     el.style.background = 'red';
  //   }
  // }
  //----------------------------------
  var readSelection = window.getSelection();
  var endingNode = readSelection.focusNode.parentNode;
  var startingNode = readSelection.anchorNode.parentNode;
  var currentNode = startingNode || null;
  var count = 0;
  function followText(node) {
    var strArray = node.innerText.split(' ');
    var readSpan = [
      '<span style="color: dimgrey;text-decoration: underline;">',
      '</span>'
    ];
    var combineArrays = [];
    var arrToStr;
    strArray.forEach(function(word, i) {
      count++;
      setTimeout(() => {
        readSpan.pop();
        readSpan.push(word);
        readSpan.push('</span>');
        combineArrays = [...readSpan, ...strArray.slice(i + 1)];
        strToArr = combineArrays.join(' ');
        node.innerHTML = strToArr;
      }, 200 * count);
    });
    currentNode = node.nextElementSibling;
  }
  while (currentNode !== endingNode) {
    followText(currentNode);
  }
  followText(currentNode);
  readSelection.empty();
}
