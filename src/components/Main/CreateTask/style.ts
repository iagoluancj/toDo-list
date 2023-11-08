import styled from "styled-components";

export const CreateNewTaskComponent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -20px;
    gap: .875rem;
`;

export const AddNewTask = styled.input`
    width: 50%;
    padding: 16px;

    border-radius: 8px;
    border: 1px solid ${props => props.theme['gray-700']};
    background: ${props => props.theme['gray-500']};
    color: ${props => props.theme['gray-300']};

    &::placeholder {
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        color: ${props => props.theme['gray-300']};
    }
`;

export const ButtonCreateNewTask = styled.button`
    display: flex;
    padding: 0 15px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: ${props => props.theme['gray-100']};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 19.6px */

    border-radius: 8px;
    border: 0px solid transparent;
    background: ${props => props.theme['blue-dark']};
    transition: .1s;

    &:hover {
        background: ${props => props.theme['blue']};
        padding-right: 20px;
        font-size: 14.5px;
        transition: .1s;
        cursor: pointer;
    }

    @media (max-width: 777px) {
        padding: 0 8px;
    }
`;