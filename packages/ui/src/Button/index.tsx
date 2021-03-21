import React from 'react';
import { TouchableHighlight } from 'react-native';

interface Props {
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, children }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
};
