module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    globals: {
      'vue-jest': {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('my-'),
        },
      },
    },
    testEnvironmentOptions: {
      customExportConditions: ['node', 'node-addons'],
    }
  };