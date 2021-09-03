import { createGlobalStyle } from "styled-components";

const commonTheme = {
    fonts: {
        primary: "Bebas Neue,sans-serif",
        secondary: "Saira,sans-serif",
    },
    breakpoints: {
        md: "screen and (min-width: 800px)",
        xl: "screen and (min-width: 1024px)",
    },
};

export const lightTheme = {
    colors: {
        background: "#ECECEB",
        text: "#2E383F",
        accent: "#07617D",
    },
    ...commonTheme,
};

export const darkTheme = {
    colors: {
        background: "#2E383F",
        text: "#ECECEB",
        accent: "#F9A828",
    },
    ...commonTheme,
};

export const GlobalStyles = createGlobalStyle`
    @font-face {
        src: url('/fonts/BebasNeue-Regular.ttf');
        font-family:'Bebas Neue'
    }
    @font-face {
        src: url('/fonts/SairaCondensed-Regular.ttf');
        font-family:'Saira'
    }
    *,*:before,*:after{
        box-sizing: border-box;
    }
    html,body,h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
    }
    body{
        background-color: ${({ theme }) => theme.colors.background};
        color:${({ theme }) => theme.colors.text} ;
        font-family: ${({ theme }) => theme.fonts.secondary};
    }
`;
