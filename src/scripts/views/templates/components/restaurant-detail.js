import RestaurantsSource from '../../../data/restaurants-source'
import LikeButtonPresenter from '../../../utils/like-button-presenter'
import showFlashMessage from '../../../utils/flash-message'
import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb'

/* eslint-disable eqeqeq */
class RestaurantDetail extends HTMLElement {
  constructor () {
    super()
    this.menus = null
    this.reviews = null
  }

  connectedCallback () {
    this.id = this.getAttribute('id') || null
    this.name = this.getAttribute('name') || null
    this.description = this.getAttribute('description') || null
    this.pictureId = this.getAttribute('pictureId') || null
    this.pictureUrl = this.getAttribute('pictureUrl') || null
    this.address = this.getAttribute('address') || null
    this.city = this.getAttribute('city') || null
    this.rating = this.getAttribute('rating') || null
    this.render()
  }

  setMenus (menus) {
    this.menus = menus
  }

  setReviews (reviews) {
    this.reviews = reviews
  }

  render () {
    this.innerHTML =
        `
        <article class="hero">
            <img data-src="${this.pictureUrl}" alt="Foto Restaurant ${this.name}, ${this.city}" class="skeleton lazyload">
        </article>
        <article class="content">
            <div class="top-content">
                <div class="left-content">
                    <section class="content-header">
                        <div class="content-header-wrapper">
                            <div id="likeButtonContainer"></div>
                            <h2 class="restaurant-name">${this.name}</h2>
                            <div class="rating">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <span class="rating-text">${this.rating}</span>
                            </div>
                            <p class="restaurant-address">${this.address}, ${this.city}</p>
                        </div>
                        <div class="divider"></div>
                    </section>
                    <section class="description-wrapper">
                        <p>${this.description}</p>
                        <div class="divider"></div>
                    </section>
                </div>
                <aside class="menus">
                    <div class="menus-wrapper">
                        <h3>Menu</h3>
                        <section>
                            <h4>Makanan</h4>
                            <ul class="foods-menu"></ul>
                        </section>
                        <section>
                            <h4>Minuman</h4>
                            <ul class="drinks-menu"></ul>
                        </section>
                    </div>
                    <div class="divider"></div>
                </aside>
            </div>
            <section class="customer-reviews">
                <section class="items-wrapper"></section>
                <form>
                    <h3>Tulis Review</h3>
                    <input type="text" id="name" placeholder="Masukkan nama Anda" required>
                    <textarea id="review" rows="4" cols="50" placeholder="Review tentang restaurant ini" required></textarea>
                    <div class="action">
                        <button id="btnSendReview">Kirim</button>
                    </div>
                </form>
            </section>
        </article>
        `

    this.likeButtonInit()

    this.renderRating()

    this.menus.foods.forEach(food => {
      const item = `<li>${food.name}</li>`
      this.querySelector('.foods-menu').innerHTML += item
    })

    this.menus.drinks.forEach(food => {
      const item = `<li>${food.name}</li>`
      this.querySelector('.drinks-menu').innerHTML += item
    })

    this.renderReviews()

    this.querySelector('.customer-reviews form button').addEventListener('click', async (event) => {
      event.preventDefault()
      try {
        const review = {
          id: this.id,
          name: this.querySelector('.customer-reviews form #name').value,
          review: this.querySelector('.customer-reviews form #review').value
        }
        await RestaurantsSource.reviewRestaurant(review)

        this.querySelector('.customer-reviews .items-wrapper').innerHTML += `
        <div class="item last-review">
            <div class="item-header">   
                <p class="reviewer-name"><b>${review.name}</b></p>
                <p class="reviewer-date">${this.createDateFormatNow()}</p>
            </div>
            <div class="item-content">
                <p class="reviewer-review">${review.review}</p>
            </div>
        </div>
        `

        this.querySelector('.customer-reviews form #name').value = ''
        this.querySelector('.customer-reviews form #review').value = ''

        showFlashMessage('Review terkirim', 'success')
      } catch (error) {
        showFlashMessage(error.message, 'error')
      }
    })
  }

  createDateFormatNow () {
    const now = new Date()
    const year = now.getFullYear()
    let month = now.getMonth()
    const date = now.getDate()

    switch (month) {
      case 0: month = 'Januari'; break
      case 1: month = 'Februari'; break
      case 2: month = 'Maret'; break
      case 3: month = 'April'; break
      case 4: month = 'Mei'; break
      case 5: month = 'Juni'; break
      case 6: month = 'Juli'; break
      case 7: month = 'Agustus'; break
      case 8: month = 'September'; break
      case 9: month = 'Oktober'; break
      case 10: month = 'November'; break
      case 11: month = 'Desember'; break
    }

    return `${date} ${month} ${year}`
  }

  async likeButtonInit () {
    LikeButtonPresenter.init({
      likeButtonContainer: this.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: this.id,
        name: this.name,
        description: this.description,
        pictureId: this.pictureId,
        city: this.city,
        rating: this.rating
      }
    })
  }

  async renderReviews () {
    this.querySelector('.customer-reviews .items-wrapper').innerHTML = ''

    this.reviews.forEach(review => {
      const item = `
        <div class="item">
            <div class="item-header">   
                <p class="reviewer-name"><b>${review.name}</b></p>
                <p class="reviewer-date">${review.date}</p>
            </div>
            <div class="item-content">
                <p class="reviewer-review">${review.review}</p>
            </div>
        </div>
        `
      this.querySelector('.customer-reviews .items-wrapper').innerHTML += item
    })
  }

  renderRating () {
    const ratingStar = this.querySelectorAll('.rating i')

    if (this.rating < 1) {
      ratingStar[0].className = 'bi bis-star-half'
      ratingStar[1].className = 'bi bi-star'
      ratingStar[2].className = 'bi bi-star'
      ratingStar[3].className = 'bi bi-star'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating == 1) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star'
      ratingStar[2].className = 'bi bi-star'
      ratingStar[3].className = 'bi bi-star'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating < 2) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-half'
      ratingStar[2].className = 'bi bi-star'
      ratingStar[3].className = 'bi bi-star'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating == 2) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star'
      ratingStar[3].className = 'bi bi-star'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating < 3) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star-half'
      ratingStar[3].className = 'bi bi-star'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating == 3) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star-fill'
      ratingStar[3].className = 'bi bi-star'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating < 4) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star-fill'
      ratingStar[3].className = 'bi bi-star-half'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating == 4) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star-fill'
      ratingStar[3].className = 'bi bi-star-fill'
      ratingStar[4].className = 'bi bi-star'
    } else if (this.rating < 5) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star-fill'
      ratingStar[3].className = 'bi bi-star-fill'
      ratingStar[4].className = 'bi bi-star-half'
    } else if (this.rating == 5) {
      ratingStar[0].className = 'bi bi-star-fill'
      ratingStar[1].className = 'bi bi-star-fill'
      ratingStar[2].className = 'bi bi-star-fill'
      ratingStar[3].className = 'bi bi-star-fill'
      ratingStar[4].className = 'bi bi-star-fill'
    }
  }
}
customElements.get('restaurant-detail') || customElements.define('restaurant-detail', RestaurantDetail)
