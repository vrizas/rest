import RestaurantsSource from '../../data/restaurants-source'
import {
  createRestaurantItemTemplate,
  createSearchItemsTemplate
} from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <section id="home">
        <article class="hero">
          <picture>
            <source media="(max-width: 600px)" type="image/webp" srcset="./images/heros/hero-image_4-small.webp">
            <source type="image/webp" srcset="./images/heros/hero-image_4-large.webp">
            <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/heros/hero-image_4-small.jpg">
            <img src="./images/heros/hero-image_4-large.jpg" alt="" class="jumbotron skeleton lazyload" />
          </picture>
          <section class="hero-content">
            <h2>Temukan Restaurant Favoritmu</h2>
          </section>
        </article>
        <article class="menu-of-the-week">
          <h3>Menu of The Week</h3>
          <section class="items-wrapper">
            <div class="item">
              <picture>
                <source media="(max-width: 600px)" type="image/webp" srcset="./images/menus/ice-cream-small.webp">
                <source type="image/webp" srcset="./images/menus/ice-cream-large.webp">
                <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/menus/ice-cream-small.jpg">
                <img src="./images/menus/ice-cream-large.jpg" alt="Ice Cream" class="skeleton lazyload" />
              </picture>
              <h4>Ice Cream</h4>
            </div>
            <div class="item">
              <picture>
                <source media="(max-width: 600px)" type="image/webp" srcset="./images/menus/pizza-small.webp">
                <source type="image/webp" srcset="./images/menus/pizza-large.webp">
                <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/menus/pizza-small.jpg">
                <img src="./images/menus/pizza-large.jpg" alt="Pizza" class="skeleton lazyload" />
              </picture>
              <h4>Pizza</h4>
            </div>
            <div class="item">
              <picture>
                <source media="(max-width: 600px)" type="image/webp" srcset="./images/menus/cappuccino-small.webp">
                <source type="image/webp" srcset="./images/menus/cappuccino-large.webp">
                <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/menus/cappuccino-small.jpg">
                <img src="./images/menus/cappuccino-large.jpg" alt="Cappuccino" class="skeleton lazyload" />
              </picture>
              <h4>Cappuccino</h4>
            </div>
            <div class="item">
              <picture>
                <source media="(max-width: 600px)" type="image/webp" srcset="./images/menus/steak-small.webp">
                <source type="image/webp" srcset="./images/menus/steak-large.webp">
                <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/menus/steak-small.jpg">
                <img src="./images/menus/steak-large.jpg" alt="Steak" class="skeleton lazyload" />
              </picture>
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
    try {
      const restaurantsWrapper = document.querySelector('.rekomendasi .restaurants-wrapper')
      for (let i = 0; i < 6; i++) {
        restaurantsWrapper.innerHTML +=
          `<div class="item">
            <div class="item-hero">
                <div class="img-wrapper">
                  <img class="skeleton lazyload">
                </div>
                <div class="rating">
                    <div class="skeleton skeleton-text"></div>
                </div>
            </div>
            <div class="item-content">
                <h4>
                  <div class="skeleton skeleton-text"></div>
                </h4>
                <div class="lokasi">
                  <div class="skeleton skeleton-text"></div>
                </div>
                <div class="deskripsi">
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                </div>
            </div>
          </div>`
      }
      const restaurants = await RestaurantsSource.recommendedRestaurants()
      restaurantsWrapper.innerHTML = ''
      restaurants.sort((a, b) => a.rating - b.rating).reverse()

      for (let i = 0; i < 6; i++) {
        restaurantsWrapper.append(createRestaurantItemTemplate(restaurants[i]))
      }
    } catch (error) {
      window.location.hash = '/internalerror'
    }

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
      searchInput.setAttribute('placeholder', 'Masukkan nama restaurant')
      searchInput.setAttribute('autocomplete', 'off')

      const button = document.createElement('button')
      button.setAttribute('id', 'searchButton')
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
      searchInput.setAttribute('placeholder', 'Masukkan nama restaurant')
      searchInput.setAttribute('autocomplete', 'off')

      const button = document.createElement('button')
      button.setAttribute('id', 'searchButton')
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
    const searchButton = document.querySelector('#searchButton')

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
        try {
          const results = await RestaurantsSource.searchListRestaurants(keyword)
          const restaurants = results.restaurants
          restaurants.sort((a, b) => a.rating - b.rating).reverse()

          if (restaurants.length > 0) {
            searchList.innerHTML += createSearchItemsTemplate(restaurants, keyword)
          }
        } catch (error) {
          window.location.hash = '/internalerror'
        }
      }
    })

    searchButton.addEventListener('click', event => {
      event.preventDefault()
      const keyword = searchIn.value.toLowerCase()
      window.location.hash = `/search/${keyword}`
    })
  }

  const desktop = window.matchMedia('(min-width: 992px)')
  responsiveDesktop(desktop)
  desktop.addListener(responsiveDesktop)
}

export default Home
