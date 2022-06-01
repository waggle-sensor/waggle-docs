const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Waggle Docs',
  tagline: 'AI at the Edge',
  url: 'https://docs.waggle-edge.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sage-favicon.png',
  organizationName: 'waggle-sensor',
  projectName: 'waggle-docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Waggle',
      logo: {
        alt: 'Waggle',
        src: '_need_waggle_logo_',
        href: '/docs/about/overview',
      },
      items: [
        {
          to: '/docs/about/overview',
          position: 'left',
          label: 'About',
        },
        {
          to: '/docs/tutorials/accessing-data',
          position: 'left',
          label: 'Tutorials',
        },
        /*{
          to: '/blog',
          label: 'News',
          position: 'left'
        },*/
        {
          to: 'https://portal.sagecontinuum.org',
          label: 'Sage Portal',
          position: 'left'
        },
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
              to: '/docs/about/overview',
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
    algolia: {
      apiKey: 'BH4D9OD16A',
      indexName: 'sage',
      contextualSearch: false, // mostly for versioned docs
      appId: 'XYV3A23P29',
      searchParameters: {},    // Optional: Algolia search parameters
      apiKey: '8dd26cf6515c47eade5695acecd06671',
    },
    colorMode: {
      disableSwitch: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/waggle-sensor/waggle-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/waggle-sensor/waggle-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/tutorials/accessing-data',
            from: ['/data', '/docs/data']  // obscure fix for /data/ vs /data redirect(?)
          },
        ],
      },
    ]
  ]
};
