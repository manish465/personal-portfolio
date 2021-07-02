import styled from "styled-components";
import { BackDevelopSvg, DesignSvg, DevelopSvg } from "../../assets/svg";
import Skill from "./Skill";

const AboutMe = () => {
    const data = [
        {
            svg: DesignSvg,
            name: "Design",
            tools: [
                "Adobe XD",
                "Adobe Photoshop",
                "Figma",
                "Affinity Designer",
                "Affinity Photo",
            ],
        },
        {
            svg: DevelopSvg,
            name: "Front-end",
            tools: ["HTML,CSS,JS", "Reactjs", "Nextjs", "Github", "VS Code"],
        },
        {
            svg: BackDevelopSvg,
            name: "Back-end",
            tools: ["Node Js", "Express Js", "Mongodb"],
        },
    ];
    return (
        <AboutMeWrapper>
            <h2>ABOUT ME</h2>
            <p>
                Hi I'm Manish A Web Developer And Designer From Odisha, India. I
                Have Experience In HTML, CSS And Javascript For Front-End
                Development. I Also Use Framework Like Reactjs And Nextjs.
            </p>
            <h2>SKILLS</h2>
            <Skills>
                {data.map((item, key) => (
                    <Skill key={key} item={item} />
                ))}
            </Skills>
        </AboutMeWrapper>
    );
};

export default AboutMe;

const AboutMeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin: 1rem 0;
        padding: 0.1rem 1.5rem;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.background};
        border-radius: 1rem;
    }
    p {
        font-size: 1.5rem;
        padding: 0 1rem;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        p {
            padding: 0 4rem;
        }
        h2 {
            margin: 4rem 0;
        }
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        p {
            padding: 0 20rem;
        }
    }
`;

const Skills = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem 0;
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin: 0;
        flex-direction: row;
        align-items: flex-start;
    }
`;
