module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
       [
        'module-resolver',
        {
            'root': ['./src/'],
            'extensions': ['js', 'jsx', '.json'],
            'alias': {
                '@components': './src/components',
                '@screens': './src/screens',
                '@redux': './src/redux',
                '@common': './src/common'
            }
        }
       ]
    ],
  };
};
