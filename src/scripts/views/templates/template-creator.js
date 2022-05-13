import './components/restaurant-item'
import './components/restaurant-detail'
import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => {
  const element = document.createElement('restaurant-item')
  element.setAttribute('id', restaurant.id)
  element.setAttribute('name', restaurant.name)
  element.setAttribute('description', restaurant.description.slice(0, 350) + (restaurant.description.length > 350 ? '...' : ''))
  element.setAttribute('pictureId', restaurant.pictureId)
  element.setAttribute('pictureUrl', CONFIG.BASE_IMAGE_URL + restaurant.pictureId)
  element.setAttribute('city', restaurant.city)
  element.setAttribute('rating', restaurant.rating)
  return element
}

const createSearchItemsTemplate = (restaurants, keyword) => {
  let template = ''
  console.log(restaurants)
  for (let i = 0; i < 3; i++) {
    if (restaurants[i]) {
      template += `
      <li id="${restaurants[i].id}">
        <a href="#/detail/${restaurants[i].id}" class="item">
          <div class="img-wrapper">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurants[i].pictureId}" alt="Restaurant ${restaurants[i].name}, ${restaurants[i].city}">
          </div>
          <div class="text">
            <h4>${restaurants[i].name}</h4>
            <p>
              <i class="bi bi-geo-alt-fill"></i> ${restaurants[i].city}
            </p>
          </div>
        </a>
      </li>
     `
    }
  }

  template += `
    <li>
      <a href="#/search/${keyword}" class="item link-search-list">Lihat semua hasil pencarian untuk "${keyword}"</a>
    </li>
  `

  return template
}

const createRestaurantDetailTemplate = (restaurant) => {
  const element = document.createElement('restaurant-detail')
  element.setAttribute('id', restaurant.id)
  element.setAttribute('name', restaurant.name)
  element.setAttribute('description', restaurant.description)
  element.setAttribute('pictureId', restaurant.pictureId)
  element.setAttribute('pictureUrl', CONFIG.BASE_IMAGE_URL + restaurant.pictureId)
  element.setAttribute('address', restaurant.address)
  element.setAttribute('city', restaurant.city)
  element.setAttribute('rating', restaurant.rating)
  element.setMenus(restaurant.menus)
  element.setReviews(restaurant.customerReviews)

  return element
}

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="sukai restaurant ini" id="likeButton" class="like-button">
     <i class="bi bi-heart"></i> Sukai
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="batalkan suka restaurant ini" id="likeButton" class="like-button">
    <i class="bi bi-heart-fill"></i> Batalkan
  </button>
`

export {
  createRestaurantItemTemplate,
  createSearchItemsTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
