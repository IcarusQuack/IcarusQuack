module.exports = {
  siteMetadata: {
    title: 'IcarusQuack\'s Website',
    author: 'Dylan Gammon,
    description: 'I really hope your dreams come true, please allow yourself to realize them.',
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
