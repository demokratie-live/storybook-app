import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean } from '@storybook/addon-knobs';
import { ListItem } from './ListItem';
import { Background } from '../../decorators/Background';

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
    />
  </Background>
));
