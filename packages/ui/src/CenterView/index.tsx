import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => {
    console.log({ theme });
    return theme.colors.main || 'teal';
  }};
  /* background-color: blue; */
`;

export const CenterView: React.FC = ({ children, ...props }) => {
  console.log(props);

  return <Container>{children}</Container>;
};

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
