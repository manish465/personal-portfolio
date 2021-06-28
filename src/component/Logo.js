import styled from "styled-components";

const Logo = () => {
    return (
        <LogoWrapper>
            <svg
                id='Layer_1'
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 137.28 102.96'>
                <path
                    d='M195.43,277.84a51.48,51.48,0,0,0-102.86,0H75.36v4.32H92.57a51.48,51.48,0,0,0,102.86,0h17.21v-4.32ZM144,328.2A48.2,48.2,0,1,1,192.2,280,48.2,48.2,0,0,1,144,328.2Z'
                    transform='translate(-75.36 -228.52)'
                />
                <circle cx='68.64' cy='51.48' r='46.28' />
            </svg>
            <h2>PORTFOLIO</h2>
        </LogoWrapper>
    );
};

export default Logo;

const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        fill: ${({ theme }) => theme.colors.text};
        width: 4rem;
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
`;
