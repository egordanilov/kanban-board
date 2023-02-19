import { createGlobalStyle } from 'styled-components';
import CssReset from './CssReset';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    ${CssReset};
    
    body {
        font-family: 'Lato', sans-serif;
        background: ${(props) => props.theme.color.background};
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;

export default GlobalStyles;
