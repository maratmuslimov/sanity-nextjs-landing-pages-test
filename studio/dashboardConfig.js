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
                  buildHookId: '5f347ff062a87d8ead253d3f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio-zjb8nr45',
                  apiId: '661a16bf-bafc-4e5b-b9ab-5d413c26d678'
                },
                {
                  buildHookId: '5f347ff07abc917f0d4e3775',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test-web-e3m44oaj',
                  apiId: '15c29b01-58b8-42f5-b19c-d6b465f04996'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maratmuslimov/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test-web-e3m44oaj.netlify.app', category: 'apps'}
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
