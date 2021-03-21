module.exports = {
  stories: ['../../packages/ui/stories.ts'],
  webpackFinal: async (baseConfig, options) => {
    // Modify or replace config. Mutating the original reference object can cause unexpected bugs.
    const { module = {}, resolve = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  plugins: ['react-docgen'],
                },
              },
            ],
          },
        ],
      },
      resolve: {
        ...resolve,
        alias: {
          ...(resolve.alias || {}),
          // Transform all direct `react-native` imports to `react-native-web`
          'react-native$': 'react-native-web',
          // make sure we're rendering output using **web** Storybook not react-native
          '@storybook/react-native': '@storybook/react',
          // plugin-level react-native-web extensions
          'react-native-svg':
            'react-native-svg/lib/commonjs/ReactNativeSVG.web',
        },
        extensions: [...(resolve.extensions || []), '.ts', '.tsx'],
      },
    };

    // mutate babel-loader
    newConfig.module.rules[0].use[0].options.plugins.push([
      'react-native-web',
      { commonjs: true },
    ]);
    // console.dir(config, { depth: null });
    return newConfig;
  },
};
