/* eslint-disable eqeqeq */
class RestaurantItem extends HTMLElement {
  connectedCallback () {
    this.name = this.getAttribute('name') || null
    this.description = this.getAttribute('description') || null
    this.pictureId = this.getAttribute('pictureId') || null
    this.pictureUrl = this.getAttribute('pictureUrl') || null
    this.city = this.getAttribute('city') || null
    this.rating = this.getAttribute('rating') || null
    this.render()
  }

  render () {
    this.innerHTML =
        `
        <a aria-label="Restaurant ${this.name}, ${this.city}" href="/#/detail/${this.id}" class="item">
          <div class="item-hero">
              <div class="img-wrapper">
                <img data-src="${this.pictureUrl}" alt="Restaurant ${this.name}, ${this.city}" class="skeleton lazyload">
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
customElements.get('restaurant-item') || customElements.define('restaurant-item', RestaurantItem)
