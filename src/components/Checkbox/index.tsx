import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export function Checkbox({ ...props }: CheckboxProps) {
	return (
		<S.Label>
			<S.Checkbox type='checkbox' {...props} aria-label='Concluir tarefa' title='Concluir tarefa' />
			<S.CheckIcon fill='currentColor' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
				<path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path>
			</S.CheckIcon>
		</S.Label>
	)
}
