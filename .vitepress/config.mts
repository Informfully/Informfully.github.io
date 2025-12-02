import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Informfully",
  description: "Your All-in-One Solution for User Studies",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  srcExclude: ["README.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs' },
      {
        text: 'Current Events',
        items: [
          { text: 'RecSys 24', link: '/recsys-24' },
          { text: 'RecSys 23', link: '/recsys-23' }
        ]
      },
    ],
    sidebar: [
      {
        text: 'Documentation',
        link: '/docs'
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation Instructions', link: '/docs/install' },
          { text: 'Local Development', link: '/docs/development' },
          { text: 'Back End Deployment', link: '/docs/deployment' },
          { text: 'Front End Deployment', link: '/docs/native' }
        ]
      },
      {
        text: 'Managing Experiments',
        items: [
          { text: 'Overview', link: '/docs/overview' },
          { text: 'Experiment Setup', link: '/docs/experiment' },
          { text: 'User Creation', link: '/docs/users' },
          { text: 'Survey Tool', link: '/docs/surveys' },
          { text: 'Scraper Pipeline', link: '/docs/scrapers' },
          { text: 'Mobile App', link: '/docs/app' }
        ]
      },
      {
        text: 'Recommender System',
        items: [
          { text: 'Recommenders', link: '/docs/recommenders' },
          { text: 'Loading', link: '/docs/loading' },
          { text: 'Augmentation', link: '/docs/augmentation' },
          { text: 'Splitting', link: '/docs/splitting' },
          { text: 'Participatory', link: '/docs/participatory' },
          { text: 'Deliberative', link: '/docs/deliberative' },
          { text: 'Random Walks', link: '/docs/randomwalks' },
          { text: 'Neural', link: '/docs/neural' },
          { text: 'Reranker', link: '/docs/reranker' },
          { text: 'Simulator', link: '/docs/simulator' },
          { text: 'Metrics', link: '/docs/metrics' },
          { text: 'Recommendations', link: '/docs/recommendations' }
        ]
      },
      {
        text: 'Technical Documentation',
        items: [
          { text: 'Item Entries', link: '/docs/items' },
          { text: 'Compass', link: '/docs/compass' },
          { text: 'Server Overview', link: '/docs/server' },
          { text: 'Meteor Methods', link: '/docs/methods' },
          { text: 'Meteor Publications', link: '/docs/publications' },
          { text: 'Database Collections', link: '/docs/database' },
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
