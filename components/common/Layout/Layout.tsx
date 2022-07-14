import { FC, ReactNode } from 'react'
import * as S from './Layout.styled'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => <S.Main>{children}</S.Main>

export default Layout
