import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor ({ button, drawer, drawerContent, content, navigations }) {
    this._button = button
    this._drawer = drawer
    this._drawerContent = drawerContent
    this._content = content
    this._navigations = navigations

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      drawerContent: this._drawerContent
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    this.navigationActivate(url)

    const page = routes[url]
    if (!page) {
      window.location.hash = '/404'
    }
    const skipLinkElem = document.querySelector('.skip-link')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#mainContent').focus()
    })

    this._content.innerHTML = await page.render()
    await page.afterRender()
  }

  navigationActivate (url) {
    this._navigations.forEach(navigation => {
      navigation.classList.remove('active')
    })
    if (url === '/') {
      this._navigations[0].classList.add('active')
    } else if (url === '/like') {
      this._navigations[1].classList.add('active')
    }
  }
}

export default App
