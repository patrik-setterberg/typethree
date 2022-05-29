const themes = {
	dark: {
		primary: 'rgb(238, 238, 238)', // #EEEEEE
		primary07: 'rgba(238, 238, 238, 0.7)',
		primary05: 'rgba(238, 238, 238, 0.5)',
		primary04: 'rgba(238, 238, 238, 0.4)',
		primary01: 'rgba(238, 238, 238, 0.1)',
		primary005: 'rgba(238, 238, 238, 0.03)',
		highlight: '#FFD369',
		backgroundPrimary: '#191d23',
		backgroundSecondary: '#121519',
		backgroundTertiary: '#20252d',
		backgroundFourthenary: '#272d37',
	},

	light: {
		primary: '#333',
		highlight: 'orange',
		backgroundPrimary: '#fff',
		backgroundSecondary: '#999',
		backgroundTertiary: '#888',
		backgroundFourthenary: '#777',
	}
}

export default themes;

export const defaultTheme = 'dark';