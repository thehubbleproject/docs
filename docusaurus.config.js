module.exports = {
  title: 'Hubble Project',
  tagline: 'Watch your assets move at light speed!',
  url: 'https://thehubbleproject.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'thehubbleproject', // Usually your GitHub org/user name.
  projectName: 'thehubbleproject.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hubble',
      logo: {
        alt: 'hubble project',
        src: 'img/hubble.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: '',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/thehubbleproject',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hubble Project`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'GettingStarted',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/thehubbleproject/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/thehubbleproject/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
