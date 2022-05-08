import UrlParser from '../../routes/url-parser'
import RestaurantsSource from '../../data/restaurants-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <section id="detail">
        <article id="restaurant"></article>
      </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    try {
      const restaurantWrapper = document.querySelector('#restaurant')
      restaurantWrapper.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'
      const restaurant = await RestaurantsSource.detailRestaurant(url.id)
      restaurantWrapper.innerHTML = ''
      restaurantWrapper.append(createRestaurantDetailTemplate(restaurant))
    } catch (error) {
      window.location.hash = '/error'
    }
  }
}

export default Detail
