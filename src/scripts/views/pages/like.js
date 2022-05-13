
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
    try {
      const restaurantsWrapper = document.querySelector('.restaurants-wrapper')
      for (let i = 0; i < 3; i++) {
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

      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()

      restaurantsWrapper.innerHTML = ''

      if (restaurants.length > 0) {
        restaurants.forEach(restaurant => {
          restaurantsWrapper.append(createRestaurantItemTemplate(restaurant))
        })
      } else {
        restaurantsWrapper.innerHTML = '<p class="movie-item__not__found">Belum ada restaurant yang kamu sukai</p>'
      }
    } catch (error) {
      window.location.hash = '/internalerror'
    }
  }
}

export default Like
