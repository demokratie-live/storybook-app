import { AppRegistry } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { withTheme } from 'storybook-addon-ondevice-styled-theme';
import { lightTheme, darkTheme } from '../../packages/ui/src/theme';
import { host, port } from './config.json';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

addDecorator(withTheme);

addParameters({
  themes: [lightTheme, darkTheme],
});

// import stories
configure(() => {
  require('../../packages/ui/stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  // `host` and `port` are dynamically generated from storybook.sh
  host,
  port,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
