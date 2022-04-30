import RestaurantsSource from '../../data/restaurants-source'
import {
  createRestaurantItemTemplate,
  createSearchItemTemplate
} from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <section id="home">
        <article class="hero">
          <img src="./images/heros/hero-image_4.jpg" alt="" class="jumbotron" />
          <section class="hero-content">
            <h2>Temukan Restaurant Favoritmu</h2>
          </section>
        </article>
        <article class="menu-of-the-week">
          <h3>Menu of The Week</h3>
          <section class="items-wrapper">
            <div class="item">
              <img src="./images/menus/ice-cream.jpg" alt="Ice Cream" />
              <h4>Ice Cream</h4>
            </div>
            <div class="item">
              <img src="./images/menus/pizza.jpg" alt="Pizza" />
              <h4>Pizza</h4>
            </div>
            <div class="item">
              <img src="./images/menus/cappuccino.jpg" alt="Cappuccino" />
              <h4>Cappuccino</h4>
            </div>
            <div class="item">
              <img src="./images/menus/steak.jpg" alt="Steak" />
              <h4>Steak</h4>
            </div>
          </section>
        </article>
        <div id="restaurant">
          <article class="rekomendasi">
            <h3>Rekomendasi Kami</h3>
            <section class="restaurants-wrapper"></section>
          </article>
        </div>
      </section>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantsSource.recommendedRestaurants()
    const restaurantsWrapper = document.querySelector('.rekomendasi .restaurants-wrapper')

    restaurants.forEach(restaurant => {
      if (restaurant.rating >= 4) {
        restaurantsWrapper.append(createRestaurantItemTemplate(restaurant))
      }
    })

    DOM()
  }
}

const DOM = () => {
  function responsiveDesktop (x) {
    const heroContent = document.querySelector('.hero .hero-content')
    if (x.matches) {
      const mobileSearchContainer = document.querySelector('main .search-container')
      if (typeof (mobileSearchContainer) !== 'undefined' && mobileSearchContainer != null) {
        mobileSearchContainer.remove()
      }

      const container = document.createElement('div')
      container.classList.add('search-container-desktop')

      const wrapper = document.createElement('div')
      wrapper.classList.add('search-wrapper-desktop')

      const icon = document.createElement('i')
      icon.classList.add('bi', 'bi-search')

      const searchInput = document.createElement('input')
      searchInput.setAttribute('type', 'search')
      searchInput.setAttribute('name', 'search')
      searchInput.setAttribute('placeholder', 'Masukkan nama, kategori atau menu restaurant')
      searchInput.setAttribute('autocomplete', 'off')

      const button = document.createElement('button')
      button.innerText = 'Cari'

      wrapper.append(icon, searchInput, button)

      const searchList = document.createElement('ul')
      searchList.classList.add('search-list-desktop')

      container.append(wrapper, searchList)
      heroContent.append(container)

      renderSearchList('desktop')
    } else {
      const searchContainer = document.querySelector('.hero .search-container-desktop')
      if (typeof (searchContainer) !== 'undefined' && searchContainer != null) {
        searchContainer.remove()
      }

      const main = document.querySelector('main')

      const container = document.createElement('div')
      container.classList.add('search-container')

      const flex = document.createElement('div')
      flex.classList.add('flex-container')

      const closeBtn = document.createElement('button')
      closeBtn.setAttribute('id', 'closeSearch')
      closeBtn.setAttribute('aria-label', 'tutup pencarian')
      closeBtn.innerHTML = '<i class="bi bi-chevron-left"></i>'

      const wrapper = document.createElement('div')
      wrapper.classList.add('search-wrapper')

      const icon = document.createElement('i')
      icon.classList.add('bi', 'bi-search')

      const searchInput = document.createElement('input')
      searchInput.setAttribute('type', 'search')
      searchInput.setAttribute('name', 'search')
      searchInput.setAttribute('placeholder', 'Masukkan nama, kategori atau menu restaurant')
      searchInput.setAttribute('autocomplete', 'off')

      const button = document.createElement('button')
      button.innerText = 'Cari'

      wrapper.append(icon, searchInput, button)
      flex.append(closeBtn, wrapper)

      const searchList = document.createElement('ul')
      searchList.classList.add('search-list')

      container.append(flex, searchList)
      main.append(container)

      const searchButton = document.querySelector('#openSearch')
      const backButtonSearch = document.querySelector('#closeSearch')

      searchButton.addEventListener('click', event => {
        document.querySelector('main .search-container').style.display = 'inherit'
      })

      backButtonSearch.addEventListener('click', event => {
        document.querySelector('main .search-container').style.display = 'none'
      })

      renderSearchList('mobile')
    }
  }

  function renderSearchList (device) {
    let searchIn = null
    let searchList = null

    if (device === 'mobile') {
      searchIn = document.querySelector('main .search-wrapper input')
      searchList = document.querySelector('main ul.search-list')
    } else {
      searchIn = document.querySelector('.hero .search-wrapper-desktop input')
      searchList = document.querySelector('.hero ul.search-list-desktop')
    }

    searchIn.addEventListener('keyup', async (event) => {
      const keyword = event.target.value.toLowerCase()
      searchList.innerHTML = ''

      if (keyword.length >= 2) {
        const results = await RestaurantsSource.searchListRestaurants(keyword)
        results.forEach(result => {
          searchList.append(createSearchItemTemplate(result))
        })
      }
    })
  }

  const desktop = window.matchMedia('(min-width: 992px)')
  responsiveDesktop(desktop)
  desktop.addListener(responsiveDesktop)
}

export default Home
