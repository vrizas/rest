import UrlParser from '../../routes/url-parser'
import RestaurantsSource from '../../data/restaurants-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <section id="detail">
        <article id="restaurant">
          <article class="hero">
              <img class="skeleton">
          </article>
          <article class="content">
              <div class="top-content">
                  <div class="left-content">
                      <section class="content-header">
                          <div class="content-header-wrapper">
                              <div id="likeButtonWrapper"></div>
                              <h2 class="restaurant-name">
                                <div class="skeleton skeleton-text"></div>
                              </h2>
                              <div class="rating">
                                  <div class="skeleton skeleton-text"></div>
                              </div>
                              <div class="restaurant-address">
                                <div class="skeleton skeleton-text"></div>
                              </div>
                          </div>
                          <div class="divider"></div>
                      </section>
                      <section class="description-wrapper">
                          <div class="deskripsi">
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                            <div class="skeleton skeleton-text"></div>
                          </div>
                          <div class="divider"></div>
                      </section>
                  </div>
                  <aside class="menus">
                      <div class="menus-wrapper">
                          <h3>Menu</h3>
                          <section>
                              <h4>Makanan</h4>
                              <ul class="foods-menu">
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                              </ul>
                          </section>
                          <section>
                              <h4>Minuman</h4>
                              <ul class="drinks-menu">
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                                <div class="skeleton skeleton-text"></div>
                              </ul>
                          </section>
                      </div>
                      <div class="divider"></div>
                  </aside>
              </div>
              <section class="customer-reviews">
                  <section class="items-wrapper">
                    <div class="item">
                      <div class="item-header">   
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text"></div>
                      </div>
                      <div class="item-content">
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text"></div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="item-header">   
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text"></div>
                      </div>
                      <div class="item-content">
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text"></div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="item-header">   
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text"></div>
                      </div>
                      <div class="item-content">
                          <div class="skeleton skeleton-text"></div>
                          <div class="skeleton skeleton-text"></div>
                      </div>
                    </div>
                  </section>
                  <form>
                      <h3>Tulis Review</h3>
                      <div class="skeleton-form">
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text"></div>
                      </div>
                      <div class="action">
                          <div class="skeleton skeleton-text"></div>
                      </div>
                  </form>
              </section>
          </article>
        </article>
      </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    try {
      const restaurantWrapper = document.querySelector('#restaurant')
      const restaurant = await RestaurantsSource.detailRestaurant(url.id)
      restaurantWrapper.innerHTML = ''
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
