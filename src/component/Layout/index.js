import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../../util/styles";
import Appbar from "./Appbar";

const Layout = ({ children }) => {
    const [dark, setDark] = useState(true);
    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Appbar />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
