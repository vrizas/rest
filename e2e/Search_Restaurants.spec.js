/* eslint-disable no-undef */
const assert = require('assert')

Feature('Search Restaurants')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('search one restaurant', async ({ I }) => {
  I.amOnPage('/')
  I.seeElement('input[type=search]')
  I.seeElement('#searchButton')

  const keyword = 'Fairy Cafe'
  I.fillField('input[type=search]', keyword)

  I.click('#searchButton')

  I.seeElement('restaurant-item')

  const firstRestaurantName = await I.grabTextFrom(locate('restaurant-item h4').first())

  assert.strictEqual(firstRestaurantName, keyword)
})
