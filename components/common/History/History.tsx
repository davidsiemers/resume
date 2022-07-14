import { FC } from 'react'
import * as S from './History.styled'
import { useShell } from '../../ui/context'
import PS1 from '../PS1'

const History: FC = () => {
  const { history } = useShell()

  // TODO: need to refactor history typing/interface to be re-usable and use typing here
  return (
    <>
      {history.map((historyEntry: any, index: number) => (
        <div key={index + historyEntry.command}>
          <S.CommandHistory key={historyEntry.command + index}>
            <PS1 />
            <S.Command>{historyEntry.command}</S.Command>
          </S.CommandHistory>
          <S.Output dangerouslySetInnerHTML={{ __html: historyEntry.output }} />
        </div>
      ))}
    </>
  )
}

export default History
