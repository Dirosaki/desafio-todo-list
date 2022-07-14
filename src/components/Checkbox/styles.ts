import styled, { css } from 'styled-components'

import { rgba } from 'polished'

import { TaskCard } from 'components/TaskCard/styles'

export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Checkbox = styled.input`
	${({ theme }) => css`
		appearance: none;
		height: 1.375rem;
		width: 1.375rem;
		background: transparent;
		border: 2px solid ${theme.blue};
		border-radius: 20px;
		transition: 0.25s ease-out;
		cursor: pointer;

		&:hover,
		&:focus-visible {
			background: ${rgba(theme.blueDark, 0.4)};
			border-color: ${theme.blueDark};
		}

		&:checked {
			background: ${theme.purpleDark};
			border-color: ${theme.purpleDark};
		}

		&:checked:hover,
		&:checked:focus-visible {
			background: ${theme.purple};
			border-color: ${theme.purple};
		}

		${TaskCard}:hover & {
			background: ${rgba(theme.blueDark, 0.4)};
			border-color: ${theme.blueDark};
		}

		${TaskCard}:hover &:checked {
			background: ${theme.purple};
			border-color: ${theme.purple};
		}
	`}
`

export const CheckIcon = styled.svg`
	${({ theme }) => css`
		position: absolute;
		height: 0.75rem;
		object-fit: contain;
		color: transparent;
		transition: 0.25s ease-out;
		pointer-events: none;

		${Checkbox}:checked + & {
			color: ${theme.gray[100]};
		}
	`}
`
