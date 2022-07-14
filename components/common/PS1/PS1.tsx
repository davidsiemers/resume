import { FC, useState, useEffect } from 'react'
import * as S from './PS1.styled'

const PS1: FC = () => {
  const [hostname, setHostname] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window.location.hostname)
    }
  }, [])

  return (
    <S.PS1>
      <S.User>guest@</S.User>
      <S.Hostname>{hostname}</S.Hostname>
      <S.Separator>:</S.Separator>
      <S.Tilde>~</S.Tilde>
      <S.Suffix>$</S.Suffix>
    </S.PS1>
  )
}

export default PS1
