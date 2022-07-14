import { FC, useContext, createContext, useState, ReactNode } from 'react'
import * as commands from '../../utils/commands'

type CommandKey = keyof typeof commands

export interface History {
  date: Date
  command: string
  output: string
}

export interface State {
  history: History[]
  command: string
}

export interface ShellProviderProps {
  children: ReactNode
}

const initialState = {
  history: [] as History[],
  command: '',
}

export const ShellContext = createContext<State | any>(initialState)

export const ShellProvider: FC<ShellProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>(initialState)

  const execute = async (command: string) => {
    switch (command) {
      case 'clear':
        setState({
          ...state,
          command: command,
          history: [],
        })

        break
      default: {
        const output =
          Object.keys(commands).indexOf(command) !== -1
            ? await commands[command as CommandKey]()
            : `Command '${command}' not found. Try 'help' to get started.`

        setState({
          ...state,
          command: command,
          history: [
            ...state.history,
            {
              date: new Date(),
              command: command,
              output: output,
            },
          ],
        })
      }
    }
  }

  const value = { ...state, execute }

  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>
}

export const useShell = () => {
  const context = useContext(ShellContext)

  if (context === undefined) {
    throw new Error('useShell must be used within a ShellProvider')
  }

  return context
}
