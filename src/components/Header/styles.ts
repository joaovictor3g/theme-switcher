import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: #FFF;
    justify-content: space-between;
`;