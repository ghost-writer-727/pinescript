const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  devtool: 'hidden-source-map',
  entry: './src/extension.ts', // Entry point is the extension.ts file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve both TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  externals: {
    vscode: 'commonjs vscode', // Exclude the vscode module
  },
};