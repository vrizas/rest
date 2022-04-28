import './components/restaurant-item'
import './components/restaurant-detail'
import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => {
  const element = document.createElement('restaurant-item')
  element.setAttribute('id', restaurant.id)
  element.setAttribute('name', restaurant.name)
  element.setAttribute('description', restaurant.description.slice(0, 350) + (restaurant.description.length > 350 ? '...' : ''))
  element.setAttribute('pictureId', CONFIG.BASE_IMAGE_URL + restaurant.pictureId)
  element.setAttribute('city', restaurant.city)
  element.setAttribute('rating', restaurant.rating)
  return element
}

const createSearchItemTemplate = (restaurant) => {
  const li = document.createElement('li')
  li.setAttribute('id', restaurant.id)

  const item = document.createElement('a')
  item.setAttribute('href', `/#/detail/${restaurant.id}`)
  item.classList.add('item')

  const imgWrapper = document.createElement('div')
  imgWrapper.classList.add('img-wrapper')

  const img = document.createElement('img')
  img.setAttribute('src', CONFIG.BASE_IMAGE_URL + restaurant.pictureId)
  img.setAttribute('alt', `Foto Restaurant ${restaurant.name}, ${restaurant.city}`)

  imgWrapper.append(img)

  const textWrapper = document.createElement('div')
  textWrapper.classList.add('text')

  const heading = document.createElement('h4')
  heading.innerText = restaurant.name
  const p = document.createElement('p')
  p.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${restaurant.city}`

  textWrapper.append(heading, p)

  item.append(imgWrapper, textWrapper)
  li.append(item)
  return li
}

const createRestaurantDetailTemplate = (restaurant) => {
  const element = document.createElement('restaurant-detail')
  element.setAttribute('id', restaurant.id)
  element.setAttribute('name', restaurant.name)
  element.setAttribute('description', restaurant.description)
  element.setAttribute('pictureId', CONFIG.BASE_IMAGE_URL + restaurant.pictureId)
  element.setAttribute('address', restaurant.address)
  element.setAttribute('city', restaurant.city)
  element.setAttribute('rating', restaurant.rating)
  element.setMenus(restaurant.menus)
  element.setReviews(restaurant.customerReviews)

  return element
}

const createLikeButtonTemplate = () => `
  <button aria-label="sukai restaurant ini" id="likeButton" class="like-button">
     <i class="bi bi-heart"></i> Sukai
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="batalkan suka restaurant ini" id="likeButton" class="like-button">
    <i class="bi bi-heart-fill"></i> Batalkan
  </button>
`

export {
  createRestaurantItemTemplate,
  createSearchItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
