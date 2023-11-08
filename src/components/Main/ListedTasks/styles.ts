import styled from "styled-components";

export const MainListed = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap ;
    gap: 1rem;
`;

export const TasksCreatedAndCompleted = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;

    padding: 2rem 10rem;
    
    @media (max-width: 777px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0rem;
    }
`;

export const OrganizationSpan = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const SpanH2 = styled.span`
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const SpanH2CreatedTaks = styled(SpanH2)`
    color: ${props => props.theme['blue']};
`

export const SpanH2Completed = styled(SpanH2)`
    color: ${props => props.theme['purple']};
`

export const SpanBG = styled.span`
    display: flex;
    padding: 2px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 999px;
    background: ${props => props.theme['gray-400']};
`