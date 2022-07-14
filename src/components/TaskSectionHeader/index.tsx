import * as S from './styles'

type TaskSectionHeaderProps = {
	quantityTasksCreated: number
	quantityTasksCompleted: number
}

export function TaskSectionHeader({ quantityTasksCreated = 0, quantityTasksCompleted = 0 }: TaskSectionHeaderProps) {
	const haveTasks =
		quantityTasksCreated > 0 ? `${quantityTasksCompleted} de ${quantityTasksCreated}` : quantityTasksCreated

	return (
		<S.Header>
			<div>
				<S.CreatedTasks>
					Tarefas criadas <span>{quantityTasksCreated}</span>
				</S.CreatedTasks>
			</div>

			<div>
				<S.CompletedTasks>
					Concluídas <span>{haveTasks}</span>
				</S.CompletedTasks>
			</div>
		</S.Header>
	)
}
