import { FC, RefObject } from 'react'
import * as S from './Prompt.styled'
import PromptInput from '../PromptInput'
import PS1 from '../PS1'

interface Props {
  containerRef: RefObject<HTMLDivElement>
}

const Prompt: FC<Props> = ({ containerRef }) => {
  return (
    <S.Prompt>
      <PS1 />
      <PromptInput containerRef={containerRef} />
    </S.Prompt>
  )
}

export default Prompt
