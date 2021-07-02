import styled from "styled-components";

const Skill = ({ item }) => {
    return (
        <SkillWrapper>
            <item.svg />
            <h3>{item.name}</h3>
            <Tools>
                {item.tools.map((tool, key) => (
                    <span key={key}>{tool}</span>
                ))}
            </Tools>
        </SkillWrapper>
    );
};

export default Skill;

const SkillWrapper = styled.div`
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        margin: 0.5rem 0;
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.accent};
    }
    path {
        fill: ${({ theme }) => theme.colors.accent};
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        margin: 0;
    }
`;
const Tools = styled.section`
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-size: 1.5rem;
    }
`;
