import styled, { css } from 'styled-components'

type TaskTextProps = {
	isTaskFinished: boolean
}

export const TaskCard = styled.li`
	${({ theme }) => css`
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: ${theme.gray[500]};
		border-radius: ${theme.borderRadius[8]};
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
		list-style: none;
		color: ${theme.gray[100]};
		cursor: pointer;
	`}
`

export const TaskText = styled.p<TaskTextProps>`
	${({ theme, isTaskFinished }) => css`
		text-decoration-line: ${isTaskFinished ? 'line-through' : 'initial'};
		color: ${isTaskFinished ? theme.gray[300] : theme.gray[100]};
		transition: 0.25s ease-out;
		user-select: none;
	`}
`

export const DeleteTaskButton = styled.button`
	${({ theme }) => css`
		margin-left: auto;
		height: 2rem;
		width: 2rem;
		background: transparent;
		border: none;
		border-radius: ${theme.borderRadius[4]};
		line-height: 0;
		color: ${theme.gray[300]};
		transition: 0.25s ease-out;
		cursor: pointer;

		&:hover,
		&:focus-visible {
			background: ${theme.gray[400]};
			color: ${theme.danger};
		}

		svg {
			margin-left: 1px;
			height: 1.125rem;
			width: 1.125rem;
		}
	`}
`
