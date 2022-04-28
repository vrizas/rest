/* eslint-disable eqeqeq */
class RestaurantItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.name = this.getAttribute('name') || null
    this.description = this.getAttribute('description') || null
    this.pictureId = this.getAttribute('pictureId') || null
    this.city = this.getAttribute('city') || null
    this.rating = this.getAttribute('rating') || null
    this.render()
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

          .item {
              width: 100%;
              border-radius: 10px;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              display: flex;
              flex-direction: column; 
              text-decoration: none; 
              color: var(--color-black); 
          }

          .item .img-wrapper {
              width: 100%;
              height: 240px;
              object-fit: cover;
          }

          .item img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
          }

          .item-hero {
              position: relative;
              width: 100%;
          }

          .rating {
              background-color: var(--color-white);
              padding: 5px 7px;
              border-radius: 5px 0 0 0;
              position: absolute;
              bottom: 0;
              right: 0;
              font-size: 14px;
          }

          .rating i {
              color: var(--color-main);
              font-size: 15px;
          }

          .rating-text {
              margin-right: 3px;
              font-weight: var(--fw-md);
          }

          .item-content {
              padding: 10px 20px 20px 20px;
          }

          .item-content h4 {
              font-size: 16px;
              margin-bottom: 5px;
          }

          .item-content .lokasi {
              font-size: 14px;
              font-weight: var(--fw-md);
              color: var(--color-grey);
              margin-bottom: 10px;
          }

          .item-content .lokasi i {
              font-size: 13px;
          }

          .item-content .deskripsi {
              font-size: 14px;
          }

          @media screen and (min-width: 576px) {
            .item-content {
              padding: 10px 40px 20px 20px;
            }
          }
        </style>
        <a aria-label="Restaurant ${this.name}, ${this.city}" href="/#/detail/${this.id}" class="item">
          <div class="item-hero">
              <div class="img-wrapper">
                <img src="${this.pictureId}" alt="Foto Restaurant ${this.name}, ${this.city}">
              </div>
              <div class="rating">
                  <span class="rating-text">${this.rating}</span>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
              </div>
          </div>
          <div class="item-content">
              <h4>${this.name}</h4>
              <p class="lokasi"><i class="bi bi-geo-alt-fill"></i> ${this.city}</p>
              <p class="deskripsi">${this.description}</p>
          </div>
        </a>
        `
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
customElements.define('restaurant-item', RestaurantItem)
