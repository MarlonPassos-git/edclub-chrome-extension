import { reloadLesson } from './reloadLesson'

const commands: Record<string, ()=> void> = {
  reloadLesson
}

export function execCommand(command: string) {
  const commandFunction = commands[command]

  if (commandFunction) {
    commandFunction()
  }  
}