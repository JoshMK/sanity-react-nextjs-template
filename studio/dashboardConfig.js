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
                  buildHookId: '5de7d741475c02cdc12e9e14',
                  title: 'Sanity Studio',
                  name: 'sanity-react-nextjs-template-studio',
                  apiId: '3d8ea4a3-b2f0-48ab-8434-b0060775c699'
                },
                {
                  buildHookId: '5de7d741c7fdc3c3f6c3e3a8',
                  title: 'Landing pages Website',
                  name: 'sanity-react-nextjs-template',
                  apiId: '67e422fc-d4e3-4362-bce2-461f289395d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoshMK/sanity-react-nextjs-template',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-react-nextjs-template.netlify.com', category: 'apps'}
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
