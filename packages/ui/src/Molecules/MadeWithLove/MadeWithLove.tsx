import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  padding-top: 11px;
  height: 50px;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const LinkColorText = styled.Text`
  color: ${({ theme }) => theme.colors.primaryColoredText};
`;

export const MadeWithLove: React.FC = () => (
  <Wrapper>
    <Text>
      Made with ❤ by <LinkColorText>DEMOCRACY Deutschland e.V.</LinkColorText>
    </Text>
  </Wrapper>
);
