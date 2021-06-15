const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Resolve path issue for emotion v11
          '@emotion/core': path.resolve('node_modules/@emotion/react'),
          'emotion-theming': path.resolve('node_modules/@emotion/react'),
        },
      },
    }
  },
}
