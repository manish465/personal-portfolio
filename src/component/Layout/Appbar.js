import styled from "styled-components";
import Logo from "../Logo";

import { Sunsvg, Moonsvg, Opensvg, Closesvg } from "../../assets/svg";

const Appbar = ({ dark, setDark, openMenu, setOpenMenu }) => {
    return (
        <AppbarWrapper>
            <Logo />
            <span onClick={() => setDark((prev) => !prev)}>
                {dark ? <Sunsvg /> : <Moonsvg />}
            </span>
            <span onClick={() => setOpenMenu((prev) => !prev)}>
                {openMenu ? <Closesvg /> : <Opensvg />}
            </span>
            <ul>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>CONTECT</li>
            </ul>
        </AppbarWrapper>
    );
};

export default Appbar;

const AppbarWrapper = styled.header`
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1000;
    ul {
        display: none;
    }
    & > span svg {
        cursor: pointer;
        width: 1.5rem;
        path {
            stroke: ${({ theme }) => theme.colors.text};
            fill: ${({ theme }) => theme.colors.text};
        }
    }
`;
