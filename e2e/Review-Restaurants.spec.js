/* eslint-disable no-undef */
const assert = require('assert')

Feature('Review Restaurants')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('review one restaurant', async ({ I }) => {
  I.seeElement('restaurant-item')
  I.click(locate('restaurant-item').first())

  I.seeElement('input#name')

  const inputName = 'Bambang'
  const inputReview = 'Mantapp!'

  I.seeElement('input#name')
  I.fillField('input#name', inputName)

  I.seeElement('textarea#review')
  I.fillField('textarea#review', inputReview)

  I.click('#btnSendReview')
  I.seeElement(locate('.customer-reviews .item:nth-last-of-type(1)'))
  const reviewerName = await I.grabTextFrom(locate('.customer-reviews .item:nth-last-of-type(1) .reviewer-name'))
  const reviewerReview = await I.grabTextFrom(locate('.customer-reviews .item:nth-last-of-type(1) .reviewer-review'))

  assert.strictEqual(inputName, reviewerName)
  assert.strictEqual(inputReview, reviewerReview)
})
