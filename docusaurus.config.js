const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sage',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sage-favicon.png',
  organizationName: 'sagecontinuum',
  projectName: 'sage',
  themeConfig: {
    navbar: {
      title: 'Sage',
      logo: {
        alt: 'Sage Logo',
        src: 'img/logo.png',
        href: 'https://portal.sagecontinuum.org/'
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'News', position: 'left'},
        /*
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: '/docs/about',
            },
          ],
        },
        /*
        {
          title: 'example',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        }
        */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sage`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    hideableSidebar: true,
    disableSwitch: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sagecontinuum/sage-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sagecontinuum/sage-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
