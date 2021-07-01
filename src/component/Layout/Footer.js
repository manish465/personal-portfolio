import Link from "next/link";
import styled from "styled-components";
import { Mailsvg, Githubsvg, LinkedInsvg } from "../../assets/svg";

const Footer = () => {
    return (
        <FooterWrapper>
            <ul>
                <li>
                    <Link href='/project/development'>PROJECTS</Link>
                </li>
                <li>
                    <Link href='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link href='/contact'>CONTECT</Link>
                </li>
            </ul>
            <div>
                <span>
                    <Mailsvg />
                    ms5978307@gmail.com
                </span>
                <ul>
                    <li>
                        <Githubsvg />
                    </li>
                    <li>
                        <LinkedInsvg />
                    </li>
                </ul>
            </div>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    a {
        cursor: pointer;
    }
    ul {
        list-style: none;
        display: flex;
    }
    & > ul {
        justify-content: space-between;
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.background};
            font-size: 1.5rem;
        }
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color: ${({ theme }) => theme.colors.background};
            path {
                stroke: ${({ theme }) => theme.colors.background};
            }
        }
        ul {
            flex-direction: row;
            li {
                margin-right: 0.5rem;
                path {
                    fill: ${({ theme }) => theme.colors.background};
                }
            }
        }
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        flex-direction: row;
        justify-content: space-between;
        & > ul li {
            margin-right: 1rem;
        }
    }
`;
