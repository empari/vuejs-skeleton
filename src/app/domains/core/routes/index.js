import { Erro404 } from './components'

export default [
  {
    name: 'erro404',
    path: '*',
    component: Erro404,
    meta: {
      title: 'Ops! Página não encontrada',
      requiresAuth: false
    }
  }
]
