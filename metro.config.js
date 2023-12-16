module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true, 
        inlineRequires: true, 
      },
    }),
    minifierConfig: {
    },
    babelTransformerPath: require.resolve('react-native-babel-transformer'),
  },
};
