import { FC } from 'react'
import * as S from './Terminal.styled'
import History from '../History'
import Prompt from '../Prompt'

const Terminal: FC = () => (
  <S.Window>
    <History />
    <Prompt />
  </S.Window>
)

export default Terminal
