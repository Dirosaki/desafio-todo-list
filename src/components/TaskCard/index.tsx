import { Checkbox } from 'components/Checkbox'
import { TrashIcon } from 'components/TrashIcon'

import * as S from './styles'

type TaskCardProps = {
	id: string
	task: string
	isTaskFinished: boolean
	onChangeFinishedTask: (id: string) => void
	onDeleteTask: (id: string) => void
}

export function TaskCard({ id, task, isTaskFinished, onChangeFinishedTask, onDeleteTask }: TaskCardProps) {
	function handleDeleteTaskById(event: React.MouseEvent<HTMLButtonElement>) {
		event.stopPropagation()
		onDeleteTask(id)
	}

	function handleChangeFinishedTask() {
		onChangeFinishedTask(id)
	}

	return (
		<S.TaskCard onClick={handleChangeFinishedTask} role='button'>
			<Checkbox checked={isTaskFinished} onChange={handleChangeFinishedTask} />
			<S.TaskText isTaskFinished={isTaskFinished}>{task}</S.TaskText>
			<S.DeleteTaskButton
				type='button'
				onClick={handleDeleteTaskById}
				aria-label='Excluir tarefa'
				title='Excluir tarefa'
			>
				<TrashIcon />
			</S.DeleteTaskButton>
		</S.TaskCard>
	)
}
