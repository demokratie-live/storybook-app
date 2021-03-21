import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { VotesIndex } from '.';
import { CenterView } from '../../decorators/CenterView';

storiesOf('Atoms/VotesIndex', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <VotesIndex voted={boolean('voted', false)} votes={number('count', 726)} />
  ));
