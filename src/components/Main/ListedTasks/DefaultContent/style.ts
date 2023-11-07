import styled from "styled-components";

export const DefaultListTasks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    
    padding: 64px 24px;
    width: 70%;

    border-radius: 8px;
    border-top: 1px solid ${props => props.theme['grey-400']};
`
