import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from '../../packages/ui/src/theme';

addDecorator(withKnobs);
addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));
