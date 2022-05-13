/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('#/like')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Belum ada restaurant yang kamu sukai', '.movie-item__not__found')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang kamu sukai', '.movie-item__not__found')

  I.amOnPage('/')
  I.seeElement('restaurant-item')

  const firstRestaurant = locate('restaurant-item').first()
  const firstRestaurantName = await I.grabAttributeFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.seeElement('restaurant-item')
  const likedRestaurantName = await I.grabAttributeFrom('restaurant-item')

  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})
