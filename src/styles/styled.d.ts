import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		blue: string
		blueDark: string
		danger: string
		gray: {
			100: string
			200: string
			300: string
			400: string
			500: string
			600: string
			700: string
		}
		purple: string
		purpleDark: string
		borderRadius: {
			4: string
			8: string
		}
	}
}
