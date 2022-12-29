import * as S from './styles'

import logo from '../../assets/logo.svg'
import effectHeaderLeft from '../../assets/effectHeaderLeft.svg'
import effectHeaderRight from '../../assets/effectHeaderRight.svg'

export function Header() {
  return (
    <S.Header>
      <img src={effectHeaderLeft} alt="" />
      <S.Logo src={logo} alt="" />
      <img src={effectHeaderRight} alt="" />
    </S.Header>
  )
}
