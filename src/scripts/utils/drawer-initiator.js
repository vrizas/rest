const DrawerInitiator = {
  init ({ button, drawer, drawerContent }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, drawerContent)
    })

    drawerContent.addEventListener('click', (event) => {
      this._stopPropagationDrawerContent(event)
    })

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, drawerContent)
    })
  },

  _toggleDrawer (event, drawer, drawerContent) {
    event.stopPropagation()
    drawer.classList.toggle('open')
    setTimeout(() => {
      drawerContent.classList.toggle('open')
    }, 300)
    event.stopPropagation()
  },

  _stopPropagationDrawerContent (event) {
    event.stopPropagation()
  },

  _closeDrawer (event, drawer, drawerContent) {
    event.stopPropagation()
    drawerContent.classList.remove('open')
    setTimeout(() => {
      drawer.classList.remove('open')
    }, 300)
  }
}

export default DrawerInitiator
