import 'regenerator-runtime'
import '../styles/main.scss'
import App from './views/app'
import swRegister from './utils/sw-register'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  drawerContent: document.querySelector('#navigationDrawer ul'),
  content: document.querySelector('#mainContent'),
  navigations: document.querySelectorAll('header nav ul a')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
