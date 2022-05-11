import UrlParser from '../../routes/url-parser'
import RestaurantsSource from '../../data/restaurants-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Search = {
  async render () {
    return `
      <section id="search" class="search">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const keyword = url.id
    const searchList = document.querySelector('#search')

    try {
      const results = await RestaurantsSource.searchListRestaurants(keyword)
      const restaurants = results.restaurants
      searchList.style.display = 'block'

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
