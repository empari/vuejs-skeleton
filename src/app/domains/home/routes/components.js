export const Main = r => require.ensure([], () => r(require('../components/Main')), 'auth-bundle')
export const Home = r => require.ensure([], () => r(require('../components/Home')), 'auth-bundle')
export const DocumentationUX = r => require.ensure([], () => r(require('../components/DocumentationUX')), 'auth-bundle')
