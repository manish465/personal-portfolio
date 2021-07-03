import styled from "styled-components";

const ContactForm = () => {
    return (
        <FormWrapper>
            <input type='text' placeholder='Enter your name' />
            <input type='text' placeholder='Enter your email' />
            <textarea row='4' col='50' placeholder='Enter your message' />
            <Button>Send</Button>
        </FormWrapper>
    );
};

export default ContactForm;

const FormWrapper = styled.form`
    margin: 6rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 100%;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
    }
    textarea {
        width: 100%;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
    }
`;
const Button = styled.button`
    margin: 1rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 3rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.accent};
`;
