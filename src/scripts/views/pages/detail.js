import UrlParser from '../../routes/url-parser'
import RestaurantsSource from '../../data/restaurants-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <section id="detail">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    try {
      const detail = document.querySelector('#detail')
      const restaurant = await RestaurantsSource.detailRestaurant(url.id)
      detail.innerHTML = '<article id="restaurant"></article>'
      const restaurantWrapper = document.querySelector('#restaurant')
      restaurantWrapper.append(createRestaurantDetailTemplate(restaurant))
    } catch (error) {
      if (error.status === 404) {
        window.location.hash = '/404'
      } else {
        window.location.hash = '/internalerror'
      }
    }
  }
}

export default Detail
