import logoImg from 'assets/logo.svg'

import * as S from './styles'

export function Header() {
	return (
		<S.Header>
			<img src={logoImg} alt='Um foguete escrito "TODO" ao lado' />
		</S.Header>
	)
}
