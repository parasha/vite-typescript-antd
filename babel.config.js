module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-transform-typescript', { allowNamespaces: true }],
  ]
}