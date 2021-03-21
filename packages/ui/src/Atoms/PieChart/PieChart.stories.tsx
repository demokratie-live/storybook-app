import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { PieChart, ChartEntry } from '.';
import styled from 'styled-components/native';
import { number, text, color, boolean } from '@storybook/addon-knobs';
import { darkData, exampleLength, lightData } from './data';

const Container = styled.View`
  width: 500px;
  height: 500px;
`;

storiesOf('Atoms/PieChart', module)
  .add('light', () => {
    const size = number('size', 500);
    const entries = number('entries', 3);
    const data: ChartEntry[] = [...new Array(entries)].map((_, i) => ({
      name: text(`${i}. name`, lightData[i % exampleLength].name),
      value: number(`${i}. value`, lightData[i % exampleLength].value),
      color: color(`${i}. color`, lightData[i % exampleLength].color),
      highlight: boolean(
        `${i}. highlight`,
        !!lightData[i % exampleLength].highlight,
      ),
    }));

    return (
      <Container>
        <PieChart data={data} size={size} />
      </Container>
    );
  })
  .add('dark', () => {
    const size = number('size', 500);
    const entries = number('entries', 3);
    const data: ChartEntry[] = [...new Array(entries)].map((_, i) => ({
      name: text(`${i + 1}. name`, darkData[i % exampleLength].name),
      value: number(`${i + 1}. value`, darkData[i % exampleLength].value),
      color: color(`${i + 1}. color`, darkData[i % exampleLength].color),
      highlight: boolean(
        `${i + 1}. highlight`,
        !!darkData[i % exampleLength].highlight,
      ),
    }));

    return (
      <Container>
        <PieChart data={data} size={size} />
      </Container>
    );
  });
