import styled from "styled-components";

export const HeaderContent = styled.div`
    width: 100%;
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme['gray-700']};
`;

export const SpanLogo = styled.span`
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`;

export const SpanOne = styled(SpanLogo)`
    margin-left: 10px;
    color: ${props => props.theme['blue']};
`;

export const SpanTwo = styled(SpanLogo)`
    color: ${props => props.theme['purple-dark']};
`;