const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/table', component: () => import('pages/GeneralPage.vue'),
        children: [
          { path: '', component: () => import('pages/table/TableView.vue')}
        ]
      },
      {
        path: '/form', component: () => import('pages/GeneralPage.vue'),
        children: [
          { path: '', component: () => import('pages/form/FormView.vue') }
        ]
      },
      {
        path: '/dashboard', component: () => import('pages/GeneralPage.vue'),
        children: [
          { path: '', component: () => import('pages/dashboard/DashboardView.vue') }
        ]
      }
    ]


  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
