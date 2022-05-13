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
  const inputReview = 'review terakhir'

  I.seeElement('input#name')
  I.fillField('input#name', inputName)

  I.seeElement('textarea#review')
  I.fillField('textarea#review', inputReview)

  I.click('button#btnSendReview')
  I.seeElement('.last-review')

  const reviewerName = await I.grabTextFrom(locate('.last-review .reviewer-name'))
  const reviewerReview = await I.grabTextFrom(locate('.last-review .reviewer-review'))

  assert.strictEqual(inputName, reviewerName)
  assert.strictEqual(inputReview, reviewerReview)
})
