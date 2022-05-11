
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
      <section id="like">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </section>
    `
  },

  async afterRender () {
    try {
      const like = document.querySelector('#like')
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()

      like.style.display = 'block'
      like.innerHTML = `
      <div id="restaurant">
          <article class="like">
              <h3>Restaurant yang Kamu Sukai</h3>
              <section class="restaurants-wrapper"></section>
          </article>
      </div>`

      const restaurantsWrapper = document.querySelector('.restaurants-wrapper')
      if (restaurants.length > 0) {
        restaurants.forEach(restaurant => {
          restaurantsWrapper.append(createRestaurantItemTemplate(restaurant))
        })
      } else {
        restaurantsWrapper.innerHTML = '<p>Belum ada restaurant yang kamu sukai</p>'
      }
    } catch (error) {
      window.location.hash = '/internalerror'
    }
  }
}

export default Like
