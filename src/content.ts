import { execCommand } from "./commands"
import { COMMAND_ACTION } from "./constants"

chrome.runtime.onMessage.addListener(function(request, _, sendResponse) {
  if (request.action !== COMMAND_ACTION) return 
  if (typeof request.data !== 'string') return 

    execCommand(request.data)
    sendResponse({ resposta: "Mensagem recebida no content script" });
});
