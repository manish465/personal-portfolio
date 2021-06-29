import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";

import {
    Sunsvg,
    Moonsvg,
    Opensvg,
    Closesvg,
    Githubsvg,
    LinkedInsvg,
} from "../../assets/svg";

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
                <li>
                    <Link href='/project/front-end'>PROJECTS</Link>
                </li>
                <li>
                    <Link href='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link href='/contact'>CONTECT</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Githubsvg />
                </li>
                <li>
                    <LinkedInsvg />
                </li>
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
    & > span svg {
        cursor: pointer;
        width: 1.5rem;
        path {
            stroke: ${({ theme }) => theme.colors.text};
            fill: ${({ theme }) => theme.colors.text};
        }
    }
    ul {
        display: none;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        & > span:nth-of-type(2) {
            display: none;
        }
        ul {
            display: flex;
            list-style: none;
            li {
                margin: 0 1rem;
                a {
                    text-decoration: none;
                    color: ${({ theme }) => theme.colors.accent};
                    font-size: 1.2rem;
                    cursor: pointer;
                    svg {
                        path {
                            fill: ${({ theme }) => theme.colors.text};
                        }
                    }
                }
            }
        }
    }
`;
