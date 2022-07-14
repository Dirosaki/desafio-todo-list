import styled, { css } from 'styled-components'

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`

export const CreatedTasks = styled.b`
	${({ theme }) => css`
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: ${theme.blue};

		span {
			margin-left: 0.5rem;
			padding: 0.125rem 0.5rem;
			color: ${theme.gray[200]};
			border-radius: 999px;
			background: ${theme.gray[400]};
		}
	`}
`

export const CompletedTasks = styled(CreatedTasks)`
	${({ theme }) => css`
		color: ${theme.purple};
	`}
`
