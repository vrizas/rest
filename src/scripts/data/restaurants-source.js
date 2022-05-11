import API_ENDPOINT from '../globals/api-endpoint'
import { NotFoundError } from '../utils/custom-error'

class RestaurantsSource {
  static async recommendedRestaurants () {
    const response = await fetch(API_ENDPOINT.RECOMMENDED)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async searchListRestaurants (keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword))
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    if (response.status === 404) {
      throw new NotFoundError('Restaurant not found')
    }

    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async reviewRestaurant (review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    if (response.status === 400) {
      throw new SyntaxError('Nama dan review wajib diisi!')
    }

    const responseJson = await response.json()
    return responseJson
  }
}

export default RestaurantsSource
