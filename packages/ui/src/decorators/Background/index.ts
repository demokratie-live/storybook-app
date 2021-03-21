import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;
