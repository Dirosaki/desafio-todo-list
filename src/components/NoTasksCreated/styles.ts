import styled, { css } from 'styled-components'

export const Empty = styled.div`
	margin-top: 24px;
	padding: 64px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #333333;

	img {
		height: 5rem;
	}

	b {
		margin-top: 1.25rem;
	}

	b,
	p {
		letter-spacing: 0.02em;
		line-height: 140%;
		text-align: center;
	}
`
