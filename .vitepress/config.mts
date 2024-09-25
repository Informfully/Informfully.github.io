import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Informfully",
  description: "Your All-in-One Solution for User Studies",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation Instructions', link: '/docs/install' },
          { text: 'Local Development', link: '/docs/development' },
          { text: 'Back End Deployment (Website)', link: '/docs/deployment' },
          { text: 'Front End Deployment (Apps)', link: '/docs/native' }
        ]
      },
      {
        text: 'Running Experiments',
        items: [
          { text: 'Experiment Overview', link: '/docs/overview' },
          { text: 'Experiment Setup', link: '/docs/experiment' },
          { text: 'User Creation', link: '/docs/users' },
          { text: 'Survey Tool', link: '/docs/surveys' },
          { text: 'Scraper Pipeline', link: '/docs/scrapers' },
          { text: 'Mobile App', link: '/docs/app' }
        ]
      },
      {
        text: 'Custom Recommendations',
        items: [
          { text: 'Getting Started', link: '/docs/compass' },
          { text: 'Item Entries', link: '/docs/items' },
          { text: 'Recommendation Lists', link: '/docs/recommendations' },
          { text: 'User Explanations', link: '/docs/explanations' }
        ]
      },
      {
        text: 'Technical Documentation',
        items: [
          { text: 'Server Overview', link: '/docs/server' },
          { text: 'Meteor Publications', link: '/docs/publications' },
          { text: 'Meteor Methods', link: '/docs/methods' },
          { text: 'Database Collections', link: '/docs/database' },
          { text: 'Open-source Datasets', link: '/docs/datasets' }
        ]
      },
      {
        text: 'User Guides',
        items: [
          { text: 'Source Code Overview', link: '/docs/source' },
          { text: 'Docker Setup', link: '/docs/docker' },
          { text: 'Google Play Store', link: '/docs/google' },
          { text: 'Apple App Store', link: '/docs/apple' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Informfully' },
      { icon: 'twitter', link: 'https://twitter.com/Informfully' }
    ]
  }
})
