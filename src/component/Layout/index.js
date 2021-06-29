import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../../util/styles";
import Appbar from "./Appbar";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const [dark, setDark] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Appbar
                dark={dark}
                setDark={setDark}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            {openMenu ? <Menu /> : null}
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
