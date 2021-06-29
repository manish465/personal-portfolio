import Link from "next/link";
import styled from "styled-components";
import { Logosvg } from "../assets/svg";

const Logo = () => {
    return (
        <Link href='/'>
            <LogoWrapper>
                <Logosvg />
                <h2>PORTFOLIO</h2>
            </LogoWrapper>
        </Link>
    );
};

export default Logo;

const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        width: 2.5rem;
        fill: ${({ theme }) => theme.colors.text};
        transition: transform 200ms ease-out;
        circle {
            transform-box: fill-box;
            transform-origin: center;
            transition: transform 200ms ease-out;
            transition-delay: 200ms;
        }
    }
    &:hover svg {
        transform: rotate(0.5turn);
    }
    &:hover svg circle {
        transform: scale(0.5);
    }
    h2 {
        font-size: 1.5rem;
    }
`;
