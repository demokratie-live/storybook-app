import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean, number } from '@storybook/addon-knobs';
import { ListItem } from './ListItem';
import { Background } from '../../decorators/Background';
import { PieChart } from '../../Atoms/PieChart';
import { lightData } from '../../Atoms/PieChart/data';
import { VotesIndex } from '../../Atoms/VotesIndex';

storiesOf('Molecules', module).add('List item', () => (
  <Background>
    <ListItem
      title={text(
        'Title',
        'Bildungschancen gewährleisten, Kinder und Beschäftigte schützen und das Infektionsgeschehen eindämmen - Förderprogramm für mobile Luftfilter in Klassenräumen und Kindertageseinrichtungen',
      )}
      sessionTOPHeading={text(
        'TOP Title',
        'Allgemeinbildende Schule, Bundesmittel, COVID-19, Elektrogerät, Gesundheitsschutz, Kindertagesstätte, Luftreinhaltung, Programm der Bundesregierung, Schule, Seuchenbekämpfung, Unterricht',
      )}
      isIntro={boolean('Long Text', true)}
      pieChart={
        boolean('chart', true) ? (
          <PieChart
            data={lightData.map((d) => ({
              ...d,
              highlight: boolean('voted', false) ? d.highlight : false,
            }))}
            size={45}
          />
        ) : undefined
      }
      voteIndex={
        number('voteIndex', 863) ? (
          <VotesIndex
            votes={number('voteIndex', 863)}
            voted={boolean('voted', false)}
          />
        ) : undefined
      }
    />
  </Background>
));
