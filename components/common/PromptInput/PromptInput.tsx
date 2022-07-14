import {
  FC,
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  RefObject,
} from 'react'
import * as S from './PromptInput.styled'
import { useShell } from '../../ui/context'

interface Props {
  containerRef: RefObject<HTMLDivElement>
}

const PromptInput: FC<Props> = ({ containerRef }) => {
  const [value, setValue] = useState<string>('')
  const [commandIndex, setCommandIndex] = useState<number>(0)
  const promptInput = useRef<HTMLInputElement>(null)
  const { execute, history } = useShell()

  const handleOnChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const commandHistory: string[] = history
      .map(({ command }: { command: string }) => {
        return command
      })
      .filter((val: string) => {
        return val
      })

    if (e.key === 'Enter' || e.code === '13') {
      e.preventDefault()

      execute(value)
      setValue('')
      setCommandIndex(0)
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()

      if (!commandHistory.length) {
        return
      }

      const index: number = commandIndex + 1

      if (index <= commandHistory.length) {
        setCommandIndex(index)
        setValue(commandHistory[commandHistory.length - index])
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()

      if (!commandHistory.length) {
        return
      }

      const index: number = commandIndex - 1

      if (index > 0) {
        setCommandIndex(index)
        setValue(commandHistory[commandHistory.length - index])
      } else {
        setCommandIndex(0)
        setValue('')
      }
    }
  }

  useEffect(() => {
    if (promptInput.current && containerRef.current) {
      containerRef.current.scrollTo(0, promptInput.current.offsetTop)
      promptInput.current.focus()
    }
  }, [history])

  return (
    <S.Input
      value={value}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
      ref={promptInput}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      autoFocus
    />
  )
}

export default PromptInput
