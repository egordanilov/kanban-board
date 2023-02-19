import { createGlobalStyle } from 'styled-components';
import CssReset from './CssReset';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    ${CssReset};
    body {
        background: ${(props) => props.theme.color.background};
        color: white;
    }
`;

export default GlobalStyles;
