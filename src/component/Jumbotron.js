import styled, { css } from "styled-components";
import Link from "next/link";

const Jumbotron = () => {
    return (
        <JumbotronWrapper>
            <h1>Hi, i'am manish</h1>
            <p>
                A Web Designer And Web Developer From Odisha, India. Currently
                Working On Some Personal Projects
            </p>
            <div>
                <Link href='/project/front-end'>
                    <Button>My Work</Button>
                </Link>
                <Link href='/contact'>
                    <Button alt>Contact Me</Button>
                </Link>
            </div>
        </JumbotronWrapper>
    );
};

export default Jumbotron;

const JumbotronWrapper = styled.section`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 3rem;
    }
    p {
        font-size: 1.5rem;
        padding: 1.5rem;
    }
    div {
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        align-self: stretch;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin: 0 4rem;
        margin-top: 6rem;
        h1 {
            align-self: start;
        }
        p {
            align-self: start;
            font-size: 1rem;
            width: 500px;
            padding: 0;
            margin: 2rem 0;
        }
        div {
            align-self: start;
            flex-direction: row;
            margin: 0;
        }
    }
`;

const Button = styled.button`
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 2rem;
    background-color: ${({ theme, alt }) =>
        alt ? "transparent" : theme.colors.accent};
    border: 0.2rem solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme, alt }) =>
        alt ? theme.colors.accent : theme.colors.background};
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    letter-spacing: 0.2rem;
    cursor: pointer;
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding: 0.2rem 4rem;
        margin-right: 1rem;
    }
`;
