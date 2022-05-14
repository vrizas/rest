/* eslint-disable no-undef */
Feature('Unliking Restaurants')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('restaurant-item')
  I.click(locate('restaurant-item').first())
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')

  I.seeElement('restaurant-item')
  const firstRestaurant = locate('restaurant-item').first()
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.see('Belum ada restaurant yang kamu sukai', '.movie-item__not__found')
})
