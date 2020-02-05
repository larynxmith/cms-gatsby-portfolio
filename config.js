module.exports = {
  siteTitle: 'Christopher Smith -- Full-Stack Developer', // <title>
  manifestName: 'Christopher Smith',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
//   manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Christopher Smith',
  subHeading: 'Full-Stack Developer',
  // social
  socialLinks: [
    {
        style: 'brands',
        icon: 'fa-github',
        name: 'Github',
        url: 'https://github.com/larynxmith',
    },
    {
        style: 'brands',
        icon: 'fa-linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/larynxmith/',
    },
    {
        style: 'fa',
        icon: 'fa-envelope',
        name: 'Email',
        url: 'mailto:larynxmith@gmail.com',
    },
    {
        style: 'fa',
        icon: 'fa-file',
        name: 'Resume',
        url: 'https://github.com/larynxmith/cms-gatsby-portfolio/blob/master/resume.pdf',
    }
  ],
};
