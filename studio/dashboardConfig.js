export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607697657f59d3c6912e71ec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4ebax9z8',
                  apiId: '373c5f34-ce2c-4401-bf9d-23a6b9d8dd36'
                },
                {
                  buildHookId: '6076976591a8bcc0853b9e6c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c45u7g2h',
                  apiId: '8bb11fe9-caf2-4ec3-9594-60b7bce4248d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pierspow/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c45u7g2h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
