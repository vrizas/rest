import API_ENDPOINT from '../globals/api-endpoint'

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
    const responseJson = await response.json()
    return responseJson
  }
}

export default RestaurantsSource
