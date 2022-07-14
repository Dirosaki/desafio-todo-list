import * as S from './styles'

import emptyImg from 'assets/empty.svg'

export function NoTasksCreated() {
	return (
		<S.Empty>
			<img src={emptyImg} alt='empty' />
			<b>Você ainda não tem tarefas cadastradas</b>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</S.Empty>
	)
}
