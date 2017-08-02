import { Main, Home, DocumentationUX } from './components'

const children = [
  {
    name: 'home.view',
    path: '/',
    component: Home,
    meta: {
      title: 'Bem vindo',
      requiresAuth: false
    }
  },
  {
    name: 'home.documentation-ux',
    path: '/documentation-ux',
    component: DocumentationUX,
    meta: {
      title: 'Documentação UX',
      requiresAuth: false
    }
  }
]

export default [{
  children,
  path: '/',
  component: Main,
  meta: { requiresAuth: false }
}]
