import React from 'react';
import styled from 'styled-components/native';

const TouchableHighlight = styled.TouchableHighlight`
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, children }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
};
