
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/story',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/story', component: () => import('pages/Story.vue') }
    ]
  },
  {
    path: '/wedding-details',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/wedding-details', component: () => import('pages/WeddingDetails.vue') }
    ]
  },
  {
    path: '/travel-and-stay',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/travel-and-stay', component: () => import('pages/TravelAndStay.vue') }
    ]
  },
  {
    path: '/wedding-party',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/wedding-party', component: () => import('pages/WeddingParty.vue') }
    ]
  },
  {
    path: '/activities',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/activities', component: () => import('pages/Activities.vue') }
    ]
  },
  {
    path: '/ceremony',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/ceremony', component: () => import('pages/Ceremony.vue') }
    ]
  },
  {
    path: '/photos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/photos', component: () => import('pages/Photos.vue') }
    ]
  },
  {
    path: '/registry',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/registry', component: () => import('pages/Registry.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
