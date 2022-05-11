import RestaurantsSource from '../../../data/restaurants-source'
import LikeButtonInitiator from '../../../utils/like-button-initiator'
import showFlashMessage from '../../../utils/flash-message'

/* eslint-disable eqeqeq */
class RestaurantDetail extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
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
    this.shadowDOM.innerHTML =
        `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
        <style> 
            * {
                margin: 0;
                padding: 0;
            } 

            .divider {
                background-color: lightgray;
                width: 100%;
                height: 1px;
                margin: 20px 0 0 0;
            }

            button {
                cursor: pointer;
                border: none;
            }

            button, input, textarea {
              min-width: 44px;
              min-height: 44px;
            }

            p, li, input, textarea {
                font-size: 14px;
            }

            input, textarea {
                padding: 7px 10px;
                border-radius: 3px;
                border: 1px solid gray;
            }

            textarea {
                font-family: "Inter", sans-serif;
                resize: vertical;
            }

            .hero {
                width: 100%;
                height: 35vh;
            }

            .hero img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .rating {
                font-size: 14px;
            }

            .rating i {
                color: #fcc915;
                font-size: 15px;
            }

            .rating-text {
                margin-left: 5px;
                font-weight: 500;
            }

            .content {
                padding: 20px 15px;
            }

            .top-content, .top-content .left-content {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .content-header-wrapper, .menus-wrapper {
                display: flex;
                flex-direction:column;
                gap: 10px;
                position: relative;
            }

            .content-header h2 {
                font-size: 18px;
            }

            #likeButtonWrapper {
                position: absolute;
                top: 0;
                right: 0;
            }

            .like-button {
                background-color: #e4565e;
                color: #fdfffe;
                font-size: 15px;
                padding: 10px 15px;
                border-radius: 7px;
            }

            .like-button i {
                margin-right: 3px;
                font-size: 14px;
            }

            h3 {
                font-size: 17px;
                margin-bottom: 5px;
            }

            h4 {
                font-size: 15px;
                margin-bottom: 3px;
            }

            .menus-wrapper ul {
                margin-left: 25px;
            }

            .customer-reviews {
              margin-top: 20px;  
              word-wrap: break-word;
              word-break: break-all;
            } 

            .customer-reviews form {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .customer-reviews form .action button {
                background-color: #f4a304;
                color: #fdfffe;
                padding: 10px 45px;
                border-radius: 7px;
                font-weight: bold;
            }

            .customer-reviews .items-wrapper {
                display: flex;
                flex-direction: column;
                gap: 20px;
                margin-bottom: 35px;
            }

            .customer-reviews .item-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }

            @media screen and (min-width: 768px) {
                .top-content .left-content, .customer-reviews {
                    width: 85%;
                }
            }
            @media screen and (min-width: 992px) {
                .content {
                    padding: 20px 30px;
                }

                .top-content .left-content, .customer-reviews {
                    width: 60%;
                }

                .top-content {
                    flex-direction: row;
                }

                .menus {
                    display: flex;
                    justify-content: center;
                    width: 40%;
                    position: relative;
                }

                .menus-wrapper {
                    width: 50%;
                    height: fit-content;
                    padding: 20px 30px;
                    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                    border-radius: 10px;
                    position: absolute;
                }

                .menus .divider { 
                    display: none;
                }
            }
        </style>
        <article class="hero">
            <img src="${this.pictureUrl}" alt="Foto Restaurant ${this.name}, ${this.city}">
        </article>
        <article class="content">
            <div class="top-content">
                <div class="left-content">
                    <section class="content-header">
                        <div class="content-header-wrapper">
                            <div id="likeButtonWrapper"></div>
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
                        <button>Kirim</button>
                    </div>
                </form>
            </section>
        </article>
        `

    this.likeButtonInit()

    this.renderRating()

    this.menus.foods.forEach(food => {
      const item = `<li>${food.name}</li>`
      this.shadowDOM.querySelector('.foods-menu').innerHTML += item
    })

    this.menus.drinks.forEach(food => {
      const item = `<li>${food.name}</li>`
      this.shadowDOM.querySelector('.drinks-menu').innerHTML += item
    })

    this.renderReviews()

    this.shadowDOM.querySelector('.customer-reviews form button').addEventListener('click', async (event) => {
      event.preventDefault()
      try {
        const review = {
          id: this.id,
          name: this.shadowDOM.querySelector('.customer-reviews form #name').value,
          review: this.shadowDOM.querySelector('.customer-reviews form #review').value
        }
        await RestaurantsSource.reviewRestaurant(review)

        this.shadowDOM.querySelector('.customer-reviews .items-wrapper').innerHTML += `
        <div class="item">
            <div class="item-header">   
                <p><b>${review.name}</b></p>
                <p>${this.createDateFormatNow()}</p>
            </div>
            <div class="item-content">
                <p>${review.review}</p>
            </div>
        </div>
        `

        this.shadowDOM.querySelector('.customer-reviews form #name').value = ''
        this.shadowDOM.querySelector('.customer-reviews form #review').value = ''

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
    LikeButtonInitiator.init({
      likeButtonWrapper: this.shadowDOM.querySelector('#likeButtonWrapper'),
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
    this.shadowDOM.querySelector('.customer-reviews .items-wrapper').innerHTML = ''

    this.reviews.forEach(review => {
      const item = `
        <div class="item">
            <div class="item-header">   
                <p><b>${review.name}</b></p>
                <p>${review.date}</p>
            </div>
            <div class="item-content">
                <p>${review.review}</p>
            </div>
        </div>
        `
      this.shadowDOM.querySelector('.customer-reviews .items-wrapper').innerHTML += item
    })
  }

  renderRating () {
    const ratingStar = this.shadowDOM.querySelectorAll('.rating i')

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
customElements.define('restaurant-detail', RestaurantDetail)
