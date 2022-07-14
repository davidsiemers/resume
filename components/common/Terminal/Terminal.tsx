import { FC, useEffect, useRef } from 'react'
import * as S from './Terminal.styled'
import History from '../History'
import Prompt from '../Prompt'
import { useShell } from '../../ui/context'

const Terminal: FC = () => {
  const { execute } = useShell()
  // TODO: Refactor Ref handling to prevent prop drilling
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    execute('welcome')
  }, [])

  return (
    <S.Window ref={terminalRef}>
      <History />
      <Prompt containerRef={terminalRef} />
    </S.Window>
  )
}

export default Terminal
