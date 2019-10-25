import styled from 'styled-components';

export const MainView = styled.div`
    height: 100vh;
    width: 100;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${props => props.background ? props.background : 'grey'};
    color: ${props => props.color ? props.color : 'black'};

    transition: all 1s ease-in-out;

    &:hover {
        background: ${props => props.backgroundHover ? props.backgroundHover : 'white'};
        color: ${props => props.colorHover ? props.colorHover : 'grey'};
    }
`;



export const Button = styled.button`
    border: none;
    border-radius: 4px;
    background: orange;
    color: white;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    :hover {
    background: blue;
    }
`;


export  const Paragraph = styled.p`
  padding: 1rem;
  font-size: 2rem;
`;