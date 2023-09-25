import { COMMAND_ACTION } from "./constants"
console.log("Background script running", COMMAND_ACTION);

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id!},
    func: contentScriptFunc,
    args: ['action'],
  });
});

function contentScriptFunc(name: any) {
  alert(`"${name}" executed`);
}


chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" called`);

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var [activeTab] = tabs;
  console.log(activeTab)

  if (activeTab && activeTab.id) {
    chrome.tabs.sendMessage(activeTab.id, { action: COMMAND_ACTION, data: command });
  }

});
});