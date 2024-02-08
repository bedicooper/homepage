import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';
import { selectIsLightTheme } from '../../common/TopBar/ThemeSwitch/themeSlice';
import { GlobalStyle } from '../GlobalStyle';
import { Normalize } from 'styled-normalize';
import PersonalHomepage from '../PersonalHomepage';

function App() {
	const isLightTheme = useSelector(selectIsLightTheme);
	
	return (
		<ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
			<Normalize />
			<GlobalStyle />
			<PersonalHomepage />
		</ThemeProvider>
	);
}

export default App;