import UrlParser from '../../routes/url-parser'
import RestaurantsSource from '../../data/restaurants-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Search = {
  async render () {
    return `
      <section id="search" class="search"></section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const keyword = url.id
    const searchList = document.querySelector('#search')

    try {
      for (let i = 0; i < 6; i++) {
        searchList.innerHTML +=
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

      const results = await RestaurantsSource.searchListRestaurants(keyword)
      const restaurants = results.restaurants

      if (restaurants.length > 0) {
        restaurants.sort((a, b) => a.rating - b.rating).reverse()

        searchList.innerHTML = `
            <p>Menampilkan ${results.founded} hasil pencarian</p>
            <article class="restaurants-wrapper"></article>
          `

        const restaurantsWrapper = document.querySelector('.restaurants-wrapper')

        restaurants.forEach(restaurant => {
          restaurantsWrapper.append(createRestaurantItemTemplate(restaurant))
        })
      } else {
        searchList.innerHTML = `
            <p>Menampilkan ${results.founded} hasil pencarian</p>
            <p>${keyword} tidak ditemukan</p>
        `
      }
    } catch (error) {
      window.location.hash = '/internalerror'
    }
  }
}

export default Search
