module.exports = {
  siteMetadata: {
    title: 'Vishang Soni',
  },
  plugins: [
    {
      resolve:'gatsby-plugin-typography',
      options:{
        pathToConfigModule: 'src/utils/typography.js'
      },
    },
    //'gatsby-plugin-react-helmet','gatsby-plugin-typography'
  ],
};
