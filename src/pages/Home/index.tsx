import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from 'components/Header'
import { NewTaskField } from 'components/NewTaskField'
import { NoTasksCreated } from 'components/NoTasksCreated'
import { TaskCard } from 'components/TaskCard'
import { TaskSectionHeader } from 'components/TaskSectionHeader'

import * as S from './styles'

type TaskProps = {
	id: string
	task: string
	isTaskFinished: boolean
}

export function Home() {
	const [newTaskText, setNewTaskText] = useState('')
	const [tasks, setTasks] = useState<TaskProps[]>([])

	useEffect(() => {
		const getTasks = localStorage.getItem('@ignite-todo-challenge')

		if (!getTasks) return

		setTasks(JSON.parse(getTasks))
	}, [])

	function handleChangeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskText(event.target.value)
	}

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault()
		if (newTaskText.trim() === '') return

		const newTodo: TaskProps = {
			id: uuidv4(),
			task: newTaskText,
			isTaskFinished: false,
		}

		setTasks([...tasks, newTodo])
		setNewTaskText('')

		localStorage.setItem('@ignite-todo-challenge', JSON.stringify([...tasks, newTodo]))
	}

	function handleChangeFinishedTask(id: string) {
		const updateDaskWithTheSameId = tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					isTaskFinished: !task.isTaskFinished,
				}
			}
			return task
		})

		setTasks(updateDaskWithTheSameId)
		localStorage.setItem('@ignite-todo-challenge', JSON.stringify(updateDaskWithTheSameId))
	}

	function handleDeleteTaskById(id: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id)

		setTasks(tasksWithoutDeletedOne)
		localStorage.setItem('@ignite-todo-challenge', JSON.stringify(tasksWithoutDeletedOne))
	}

	const quantityTasksCreated = tasks.length
	const quantityTasksCompleted = tasks.filter((task) => task.isTaskFinished).length

	return (
		<>
			<Header />
			<S.Container>
				<S.Form onSubmit={handleCreateNewTask}>
					<NewTaskField value={newTaskText} onChange={handleChangeNewTaskText} />
					<S.NewTaskButton type='submit'>
						Criar
						<PlusCircle size={20} weight='bold' />
					</S.NewTaskButton>
				</S.Form>
				<S.TaskSection>
					<TaskSectionHeader
						quantityTasksCreated={quantityTasksCreated}
						quantityTasksCompleted={quantityTasksCompleted}
					/>
					{tasks.length === 0 ? (
						<NoTasksCreated />
					) : (
						<S.TaskList>
							{tasks.map((task) => (
								<TaskCard
									key={task.id}
									onChangeFinishedTask={handleChangeFinishedTask}
									onDeleteTask={handleDeleteTaskById}
									{...task}
								/>
							))}
						</S.TaskList>
					)}
				</S.TaskSection>
			</S.Container>
		</>
	)
}
