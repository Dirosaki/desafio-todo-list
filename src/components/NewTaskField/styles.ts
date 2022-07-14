import styled, { css } from 'styled-components'

export const Input = styled.input`
	${({ theme }) => css`
		padding: 1rem;
		background: ${theme.gray[500]};
		border: 2px solid transparent;
		border-radius: ${theme.borderRadius[8]};
		color: ${theme.gray[100]};
		transition: border-color 0.25s ease-out;

		&::placeholder {
			color: ${theme.gray[300]};
		}

		&:not(:placeholder-shown),
		&:focus {
			border-color: ${theme.purpleDark};
			box-shadow: initial;
		}
	`}
`
