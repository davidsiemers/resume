import { FC, useEffect } from 'react'
import * as S from './Terminal.styled'
import History from '../History'
import Prompt from '../Prompt'
import { useShell } from '../../ui/context'

const Terminal: FC = () => {
  const { execute } = useShell()

  useEffect(() => {
    execute('welcome')
  }, [])

  return (
    <S.Window>
      <History />
      <Prompt />
    </S.Window>
  )
}

export default Terminal
