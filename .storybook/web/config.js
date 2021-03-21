import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from '../../packages/ui/src/theme';

addDecorator(withKnobs);
addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[1].kind.startsWith('Start')) {
        return -1;
      } else {
        return 1;
        // return a[1].kind === b[1].kind
        //   ? 0
        //   : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      }
    },
  },
});
