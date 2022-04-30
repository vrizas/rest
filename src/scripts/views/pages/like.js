
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
      <section id="like">
        <div id="restaurant">
            <article class="like">
                <h3>Restaurant yang Kamu Sukai</h3>
                <section class="restaurants-wrapper"></section>
            </article>
        </div>
      </section>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantsWrapper = document.querySelector('.restaurants-wrapper')

    if (restaurants.length > 0) {
      restaurants.forEach(restaurant => {
        restaurantsWrapper.append(createRestaurantItemTemplate(restaurant))
      })
    } else {
      restaurantsWrapper.innerHTML = '<p>Belum ada restaurant yang kamu sukai</p>'
    }
  }
}

export default Like
