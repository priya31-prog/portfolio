module.exports =  {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader', // Add PostCSS loader if needed
      ],
    },
  ],
}