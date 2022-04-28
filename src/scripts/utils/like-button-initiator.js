import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'
import '../views/templates/components/restaurant-detail'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonWrapper, restaurant }) {
    this._likeButtonWrapper = likeButtonWrapper
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonWrapper.innerHTML = createLikeButtonTemplate()

    const likeButton = this._likeButtonWrapper.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonWrapper.innerHTML = createLikedButtonTemplate()

    const likeButton = this._likeButtonWrapper.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
