import { FC } from 'react'
import * as S from './Prompt.styled'
import PromptInput from '../PromptInput'
import PS1 from '../PS1'

const Prompt: FC = () => {
  return (
    <S.Prompt>
      <PS1 />
      <PromptInput />
    </S.Prompt>
  )
}

export default Prompt
