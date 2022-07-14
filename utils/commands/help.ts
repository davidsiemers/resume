import * as commands from './index'

export const help = async (): Promise<string> => {
  const availableCommands = Object.keys(commands).sort().join(', ')

  return `Commands available: ${availableCommands}, clear`
}
