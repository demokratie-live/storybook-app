import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Colors } from './Colors';
import { Background } from '../../decorators/Background';

storiesOf('Start', module).add('colors', () => (
  <Background>
    <Colors />
  </Background>
));
