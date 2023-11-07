import styled from "styled-components";

export const LayoutAppContainer = styled.div`
    max-width: 74rem;
    height: 100%;
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${props => props.theme["gray-600"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`;