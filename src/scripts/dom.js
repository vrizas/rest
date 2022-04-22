import './components/restaurants-list'
import Data from './data'

const btnHamburger = document.querySelector('#hamburger')
const hamburgerList = document.querySelector('.hamburger-list')
const hamburgerListWrapper = document.querySelector('.hamburger-list-wrapper')

btnHamburger.addEventListener('click', event => {
  hamburgerListWrapper.classList.toggle('open')
  setTimeout(() => {
    hamburgerList.classList.toggle('open')
  }, 300)
  event.stopPropagation()
})

hamburgerList.addEventListener('click', event => {
  event.stopPropagation()
})

hamburgerListWrapper.addEventListener('click', event => {
  hamburgerList.classList.remove('open')
  setTimeout(() => {
    hamburgerListWrapper.classList.remove('open')
  }, 300)
  event.stopPropagation()
})

const restaurants = Data.getData().restaurants
const itemsWrapper = document.querySelector('.rekomendasi .items-wrapper')

restaurants.forEach(restaurant => {
  const description = restaurant.description.slice(0, 350) + (restaurant.description.length > 350 ? '...' : '')
  if (restaurant.rating >= 4) {
    const element = document.createElement('restaurants-list')
    element.setAttribute('id', restaurant.id)
    element.setAttribute('name', restaurant.name)
    element.setAttribute('description', description)
    element.setAttribute('pictureId', restaurant.pictureId)
    element.setAttribute('city', restaurant.city)
    element.setAttribute('rating', restaurant.rating)
    itemsWrapper.append(element)
  }
})

function responsiveDesktop (x) {
  const heroContent = document.querySelector('.hero .hero-content')
  if (x.matches) {
    const mobileSearchContainer = document.querySelector('main .search-container')
    if (typeof (mobileSearchContainer) !== 'undefined' && mobileSearchContainer != null) {
      mobileSearchContainer.remove()
    }

    const container = document.createElement('div')
    container.classList.add('search-container-desktop')

    const wrapper = document.createElement('div')
    wrapper.classList.add('search-wrapper-desktop')

    const icon = document.createElement('i')
    icon.classList.add('bi', 'bi-search')

    const searchInput = document.createElement('input')
    searchInput.setAttribute('type', 'search')
    searchInput.setAttribute('name', 'search')
    searchInput.setAttribute('placeholder', 'Masukkan nama restaurant')
    searchInput.setAttribute('autocomplete', 'off')

    const button = document.createElement('button')
    button.innerText = 'Cari'

    wrapper.append(icon, searchInput, button)

    const searchList = document.createElement('ul')
    searchList.classList.add('search-list-desktop')

    container.append(wrapper, searchList)
    heroContent.append(container)

    const searchIn = document.querySelector('.hero .search-wrapper-desktop input')
    searchIn.addEventListener('keyup', event => {
      const keyword = event.target.value.toLowerCase()
      const searchList = document.querySelector('.hero ul.search-list-desktop')
      searchList.innerHTML = ''

      if (keyword !== '') {
        const result = restaurants.filter(restaurant => {
          return restaurant.name.toLowerCase().includes(keyword)
        })

        result.forEach(restaurant => {
          const li = document.createElement('li')
          li.setAttribute('id', restaurant.id)

          const item = document.createElement('a')
          item.setAttribute('href', '#')
          item.classList.add('item')

          const imgWrapper = document.createElement('div')
          imgWrapper.classList.add('img-wrapper')

          const img = document.createElement('img')
          img.setAttribute('src', restaurant.pictureId)
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
          searchList.append(li)
        })
      }
    })
  } else {
    const searchContainer = document.querySelector('.hero .search-container-desktop')
    if (typeof (searchContainer) !== 'undefined' && searchContainer != null) {
      searchContainer.remove()
    }

    const main = document.querySelector('main')

    const container = document.createElement('div')
    container.classList.add('search-container')

    const flex = document.createElement('div')
    flex.classList.add('flex-container')

    const closeBtn = document.createElement('button')
    closeBtn.setAttribute('id', 'closeSearch')
    closeBtn.setAttribute('aria-label', 'tutup pencarian')
    closeBtn.innerHTML = '<i class="bi bi-chevron-left"></i>'

    const wrapper = document.createElement('div')
    wrapper.classList.add('search-wrapper')

    const icon = document.createElement('i')
    icon.classList.add('bi', 'bi-search')

    const searchInput = document.createElement('input')
    searchInput.setAttribute('type', 'search')
    searchInput.setAttribute('name', 'search')
    searchInput.setAttribute('placeholder', 'Masukkan nama restaurant')
    searchInput.setAttribute('autocomplete', 'off')

    const button = document.createElement('button')
    button.innerText = 'Cari'

    wrapper.append(icon, searchInput, button)
    flex.append(closeBtn, wrapper)

    const searchList = document.createElement('ul')
    searchList.classList.add('search-list')

    container.append(flex, searchList)
    main.append(container)

    const searchButton = document.querySelector('#openSearch')
    const backButtonSearch = document.querySelector('#closeSearch')

    searchButton.addEventListener('click', event => {
      document.querySelector('main .search-container').style.display = 'inherit'
    })

    backButtonSearch.addEventListener('click', event => {
      document.querySelector('main .search-container').style.display = 'none'
    })

    const searchIn = document.querySelector('main .search-wrapper input')
    searchIn.addEventListener('keyup', event => {
      const keyword = event.target.value.toLowerCase()
      const searchList = document.querySelector('main ul.search-list')
      searchList.innerHTML = ''

      if (keyword !== '') {
        const result = restaurants.filter(restaurant => {
          return restaurant.name.toLowerCase().includes(keyword)
        })

        result.forEach(restaurant => {
          const li = document.createElement('li')
          li.setAttribute('id', restaurant.id)

          const item = document.createElement('a')
          item.setAttribute('href', '#')
          item.classList.add('item')

          const imgWrapper = document.createElement('div')
          imgWrapper.classList.add('img-wrapper')

          const img = document.createElement('img')
          img.setAttribute('src', restaurant.pictureId)
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
          searchList.append(li)
        })
      }
    })
  }
}

const desktop = window.matchMedia('(min-width: 992px)')
responsiveDesktop(desktop)
desktop.addListener(responsiveDesktop)
