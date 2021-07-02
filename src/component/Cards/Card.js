import styled from "styled-components";
import Image from "next/image";
import { Githubsvg, TopRightArrow } from "../../assets/svg";

const Card = ({ item }) => {
    return (
        <CardWrapper>
            <Image src={item.image} alt={item.name} width={300} height={200} />
            <h2>{item.name}</h2>
            <div>
                {item.tags.map((tag, key) => (
                    <span key={key}>{tag}</span>
                ))}
            </div>
            <section>
                <Githubsvg git={item.github} />
                <a href={item.site} target='_blank'>
                    <span>To Site</span>
                    <TopRightArrow />
                </a>
            </section>
        </CardWrapper>
    );
};

export default Card;

const CardWrapper = styled.section`
    margin: 1rem 0;
    padding: 3rem 2rem;
    background-color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    & > a,
    section a:nth-of-type(2) {
        padding: 0.2rem 1rem;
        color: ${({ theme }) => theme.colors.background};
        border: 0.15rem solid ${({ theme }) => theme.colors.background};
        font-size: 1.5rem;
        text-decoration: none;
        path {
            stroke: ${({ theme }) => theme.colors.background};
        }
    }
    img {
        width: 200px;
        border-radius: 1rem;
    }
    h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.background};
    }
    div {
        padding: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        span {
            margin: 0.5rem;
            padding: 0.1rem 0.4rem;
            color: ${({ theme }) => theme.colors.background};
            border: 0.1rem solid ${({ theme }) => theme.colors.background};
            border-radius: 3rem;
        }
    }
    section {
        width: 100%;
        margin: 0.5rem;
        padding: 0 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        a:first-child {
            path {
                fill: ${({ theme }) => theme.colors.background};
            }
        }
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        width: 40%;
        border-radius: 1.2rem;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        width: 26%;
        border-radius: 1.2rem;
        padding: 1rem;
    }
`;
