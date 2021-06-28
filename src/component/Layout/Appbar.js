import styled from "styled-components";
import Logo from "../Logo";

const Appbar = () => {
    return (
        <AppbarWrapper>
            <Logo />
        </AppbarWrapper>
    );
};

export default Appbar;

const AppbarWrapper = styled.header`
    padding: 1rem;
`;
