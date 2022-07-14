import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type NewTaskFieldProps = InputHTMLAttributes<HTMLInputElement>

export function NewTaskField({ ...props }: NewTaskFieldProps) {
	return <S.Input type='text' placeholder='Adicione uma nova tarefa' name='newTask' maxLength={128} {...props} />
}
