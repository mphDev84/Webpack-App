const path = require('path');

module.exports = {
  entry: './src/index.js',//entry file
  output: {
    filename: 'bundle.js',//exit file
    path: path.resolve(__dirname, 'dist'),
  },
module:{
  rules:[
    {
      test: /\.css$/i,//any css file can be loaded
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,//any image can be loaded
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,//any font
      type: 'asset/resource',
    },
    {
      test: /\.(csv|tsv)$/i,//spreadsheet
      use: ['csv-loader'],
    },
    {
      test: /\.xml$/i,//any xml file
      use: ['xml-loader'],
    },
  ],
},
};