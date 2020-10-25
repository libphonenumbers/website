module.exports = {
  title: 'libphonenumbers',
  tagline: "JavaScript port of Google's libphonenumber library for parsing, formatting, and validating international phone numbers in Node.js.",
  url: 'https://libphonenumbers.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Bunlong', // Usually your GitHub org/user name.
  projectName: 'libphonenumbers', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like libphonenumbers, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bunlong/libphonenumbers">GitHub</a>! ⭐️',
    },
    navbar: {
      title: 'libphonenumbers',
      logo: {
        alt: 'libphonenumbers',
        src: 'img/libphonenumbers.png',
        href: '/docs',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Bunlong/libphonenumbers',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} libphonenumbers`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/reactpatterns/reactpatterns/tree/master/pages',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
