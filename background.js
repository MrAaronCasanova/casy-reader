// chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
//   alert(response);
// });
// ------

// background script by default loads when you launch chrome and is listening for events associated with actives in the chrome browser

// background script runs on the browser as a whole - therefore, it does not talk with the js console of a given page

// browser action - when user clicks browser action button - will send a message to the content script to run it's code

// page action -

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: 'hello'
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
