import styled, { css } from 'styled-components'

export const Container = styled.main`
	margin: 0 auto;
	padding: 0 1rem 2rem;
	max-width: 48rem;
`

export const Form = styled.form`
	display: grid;
	transform: translateY(-50%);
	grid-template-columns: 1fr;
	grid-auto-flow: column;
	gap: 0.5rem;

	@media (max-width: 768px) {
		grid-auto-flow: initial;
		transform: translateY(-25%);
	}
`

export const NewTaskButton = styled.button`
	${({ theme }) => css`
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		background: ${theme.blueDark};
		border-radius: ${theme.borderRadius[8]};
		border: none;
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: ${theme.gray[100]};
		cursor: pointer;
		transition: background 0.25s ease-out;

		&:hover {
			background: ${theme.blue};
		}
	`}
`

export const TaskSection = styled.section`
	margin-top: 2rem;

	header {
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 768px) {
		margin-top: 0;
	}
`
export const TaskList = styled.ul`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
