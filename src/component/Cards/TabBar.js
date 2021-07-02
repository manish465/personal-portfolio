import styled from "styled-components";
import Link from "next/link";

const TabBar = ({ types }) => {
    return (
        <TabBarWrapper>
            {types.map((type, key) => (
                <Link href={`/project/${type}`} key={key}>
                    {type}
                </Link>
            ))}
        </TabBarWrapper>
    );
};

export default TabBar;

const TabBarWrapper = styled.header`
    margin: 1.5rem 3rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 0.4rem;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.background};
        font-size: 1.5rem;
        font-weight: bold;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        margin: 1.5rem 2rem;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin: 1.5rem 25rem;
    }
`;
