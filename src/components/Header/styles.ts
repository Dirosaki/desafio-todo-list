import styled, { css } from 'styled-components'

export const Header = styled.header`
	${({ theme }) => css`
		padding: 3rem 0 4.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${theme.gray[700]};

		img {
			height: 3.5rem;
			object-fit: contain;
		}
	`}
`
