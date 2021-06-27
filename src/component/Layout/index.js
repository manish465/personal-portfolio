import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../../util/styles";

const Layout = ({ children }) => {
    const [dark, setDark] = useState(true);
    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
