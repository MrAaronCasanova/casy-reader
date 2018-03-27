chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );
  if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' });
});

// var readButton = document.querySelector('.read-button');

// readButton.addEventListener('click', function() {
//   var readSelection = window.getSelection();

//   var endingNode = readSelection.focusNode.parentNode;

//   var startingNode = readSelection.anchorNode.parentNode;

//   var currentNode = startingNode || null;

//   var count = 0;

//   function followText(node) {
//     var strArray = node.innerText.split(' ');

//     var readSpan = [
//       '<span style="color: dimgrey;text-decoration: underline;">',
//       '</span>'
//     ];
//     var combineArrays = [];
//     var arrToStr;

//     strArray.forEach(function(word, i) {
//       count++;
//       setTimeout(() => {
//         readSpan.pop();
//         readSpan.push(word);
//         readSpan.push('</span>');
//         combineArrays = [...readSpan, ...strArray.slice(i + 1)];
//         strToArr = combineArrays.join(' ');
//         node.innerHTML = strToArr;
//       }, 200 * count);
//     });
//     currentNode = node.nextElementSibling;
//   }

//   while (currentNode !== endingNode) {
//     followText(currentNode);
//   }

//   followText(currentNode);

//   readSelection.empty();
// });

// ------------------------
// ,
//   "background": {
//     "page": "background.html",
//     "scripts": ["casyReader.js"],
//     "persistent": false
//   }

// ------------------------

// readButton.addEventListener('click', function() {
//   chrome.tabs.executeScript({
//     code: 'console.log("hello")'
//   });
// });
