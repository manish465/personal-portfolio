import TabBar from "./TabBar";
import Card from "./Card";
import styled from "styled-components";

const Cards = ({ types, items }) => {
    return (
        <>
            <TabBar types={types} />
            <CardsWrapper>
                {items.map((item, key) => (
                    <Card key={key} item={item} />
                ))}
            </CardsWrapper>
        </>
    );
};

export default Cards;

const CardsWrapper = styled.section`
    padding: 1rem;
    @media ${({ theme }) => theme.breakpoints.md} {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 1rem;
        justify-content: space-around;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;
