import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export const CenterView: React.FC = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      {children}
    </View>
  );
};

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
