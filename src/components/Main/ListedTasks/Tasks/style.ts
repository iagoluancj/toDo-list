import styled from "styled-components";

export const Task = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
    
    padding: 16px;
    width: 70%;

    border-radius: 8px;
    border: 1px solid ${props => props.theme['gray-400']};
    background: ${props => props.theme['gray-500']};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .7rem;
    }
`
export const TaskImgTrash = styled.img`
    transition: .1s;
    &:hover {
        filter: invert(67%) sepia(69%) saturate(2274%) hue-rotate(314deg) brightness(84%) contrast(115%);
        transform: scale(1.3);
        transition: .1s;
        cursor: pointer;
    }
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border: 2px solid ${props => (props.checked ? 'transparent' : props.theme['blue'])};
    background: ${props => (props.checked ? '#5E60CE' : 'white')};
    border-radius: 50%;
    transition: .3s;
`;
export const TaskSpan = styled.div<{ checked: boolean}>`
    border: 1px solid transparent;
    text-decoration: ${props => props.checked ? 'line-through' : 'none' };
    opacity: ${props => props.checked ? '0.5' : '1' };;
    white-space: normal; // ou omita esta linha, pois o valor padrão é 'normal'
    overflow-wrap: break-word;
`