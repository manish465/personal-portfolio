import styled from "styled-components";
import Link from "next/link";

const Menu = () => {
    return (
        <MenuWrapper>
            <h2>PAGES</h2>
            <Link href='/project/front-end'>PROJECTS</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/contact'>CONTECT</Link>
        </MenuWrapper>
    );
};

export default Menu;

const MenuWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(66, 71, 141, 0.05);
    -webkit-backdrop-filter: blur(1.5px);
    -ms-backdrop-filter: blur(1.5px);
    -o-backdrop-filter: blur(1.5px);
    -moz-backdrop-filter: blur(1.5px);
    backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 4rem;
        margin: 2rem 0;
        color: ${({ theme }) => theme.colors.text};
    }
    a {
        font-size: 2rem;
        text-decoration: none;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.accent};
    }
`;
