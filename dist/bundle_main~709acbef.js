(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ template_creator_createRestaurantItemTemplate; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ template_creator_createSearchItemsTemplate; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ template_creator_createRestaurantDetailTemplate; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createLikeRestaurantButtonTemplate; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ createUnlikeRestaurantButtonTemplate; });

// EXTERNAL MODULE: ./src/scripts/views/templates/components/restaurant-item.js
var restaurant_item = __webpack_require__(23);

// EXTERNAL MODULE: ./src/scripts/data/restaurants-source.js + 2 modules
var restaurants_source = __webpack_require__(2);

// EXTERNAL MODULE: ./src/scripts/utils/like-button-presenter.js
var like_button_presenter = __webpack_require__(12);

// EXTERNAL MODULE: ./src/scripts/utils/flash-message.js
var flash_message = __webpack_require__(7);

// EXTERNAL MODULE: ./src/scripts/data/favorite-restaurant-idb.js
var favorite_restaurant_idb = __webpack_require__(4);

// CONCATENATED MODULE: ./src/scripts/views/templates/components/restaurant-detail.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/* eslint-disable eqeqeq */

var restaurant_detail_RestaurantDetail = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RestaurantDetail, _HTMLElement);

  var _super = _createSuper(RestaurantDetail);

  function RestaurantDetail() {
    var _this;

    _classCallCheck(this, RestaurantDetail);

    _this = _super.call(this);
    _this.menus = null;
    _this.reviews = null;
    return _this;
  }

  _createClass(RestaurantDetail, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.id = this.getAttribute('id') || null;
      this.name = this.getAttribute('name') || null;
      this.description = this.getAttribute('description') || null;
      this.pictureId = this.getAttribute('pictureId') || null;
      this.pictureUrl = this.getAttribute('pictureUrl') || null;
      this.address = this.getAttribute('address') || null;
      this.city = this.getAttribute('city') || null;
      this.rating = this.getAttribute('rating') || null;
      this.render();
    }
  }, {
    key: "setMenus",
    value: function setMenus(menus) {
      this.menus = menus;
    }
  }, {
    key: "setReviews",
    value: function setReviews(reviews) {
      this.reviews = reviews;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.innerHTML = "\n        <article class=\"hero\">\n            <img src=\"".concat(this.pictureUrl, "\" alt=\"Foto Restaurant ").concat(this.name, ", ").concat(this.city, "\" class=\"skeleton lazyload\">\n        </article>\n        <article class=\"content\">\n            <div class=\"top-content\">\n                <div class=\"left-content\">\n                    <section class=\"content-header\">\n                        <div class=\"content-header-wrapper\">\n                            <div id=\"likeButtonContainer\"></div>\n                            <h2 class=\"restaurant-name\">").concat(this.name, "</h2>\n                            <div class=\"rating\">\n                                <i class=\"bi bi-star\"></i>\n                                <i class=\"bi bi-star\"></i>\n                                <i class=\"bi bi-star\"></i>\n                                <i class=\"bi bi-star\"></i>\n                                <i class=\"bi bi-star\"></i>\n                                <span class=\"rating-text\">").concat(this.rating, "</span>\n                            </div>\n                            <p class=\"restaurant-address\">").concat(this.address, ", ").concat(this.city, "</p>\n                        </div>\n                        <div class=\"divider\"></div>\n                    </section>\n                    <section class=\"description-wrapper\">\n                        <p>").concat(this.description, "</p>\n                        <div class=\"divider\"></div>\n                    </section>\n                </div>\n                <aside class=\"menus\">\n                    <div class=\"menus-wrapper\">\n                        <h3>Menu</h3>\n                        <section>\n                            <h4>Makanan</h4>\n                            <ul class=\"foods-menu\"></ul>\n                        </section>\n                        <section>\n                            <h4>Minuman</h4>\n                            <ul class=\"drinks-menu\"></ul>\n                        </section>\n                    </div>\n                    <div class=\"divider\"></div>\n                </aside>\n            </div>\n            <section class=\"customer-reviews\">\n                <section class=\"items-wrapper\"></section>\n                <form>\n                    <h3>Tulis Review</h3>\n                    <input type=\"text\" id=\"name\" placeholder=\"Masukkan nama Anda\" required>\n                    <textarea id=\"review\" rows=\"4\" cols=\"50\" placeholder=\"Review tentang restaurant ini\" required></textarea>\n                    <div class=\"action\">\n                        <button id=\"btnSendReview\">Kirim</button>\n                    </div>\n                </form>\n            </section>\n        </article>\n        ");
      this.likeButtonInit();
      this.renderRating();
      this.menus.foods.forEach(function (food) {
        var item = "<li>".concat(food.name, "</li>");
        _this2.querySelector('.foods-menu').innerHTML += item;
      });
      this.menus.drinks.forEach(function (food) {
        var item = "<li>".concat(food.name, "</li>");
        _this2.querySelector('.drinks-menu').innerHTML += item;
      });
      this.renderReviews();
      this.querySelector('.customer-reviews form button').addEventListener('click', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
          var review;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  _context.prev = 1;
                  review = {
                    id: _this2.id,
                    name: _this2.querySelector('.customer-reviews form #name').value,
                    review: _this2.querySelector('.customer-reviews form #review').value
                  };
                  _context.next = 5;
                  return restaurants_source["a" /* default */].reviewRestaurant(review);

                case 5:
                  _this2.querySelector('.customer-reviews .items-wrapper').innerHTML += "\n        <div class=\"item last-review\">\n            <div class=\"item-header\">   \n                <p class=\"reviewer-name\"><b>".concat(review.name, "</b></p>\n                <p class=\"reviewer-date\">").concat(_this2.createDateFormatNow(), "</p>\n            </div>\n            <div class=\"item-content\">\n                <p class=\"reviewer-review\">").concat(review.review, "</p>\n            </div>\n        </div>\n        ");
                  _this2.querySelector('.customer-reviews form #name').value = '';
                  _this2.querySelector('.customer-reviews form #review').value = '';
                  Object(flash_message["a" /* default */])('Review terkirim', 'success');
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](1);
                  Object(flash_message["a" /* default */])(_context.t0.message, 'error');

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 11]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "createDateFormatNow",
    value: function createDateFormatNow() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var date = now.getDate();

      switch (month) {
        case 0:
          month = 'Januari';
          break;

        case 1:
          month = 'Februari';
          break;

        case 2:
          month = 'Maret';
          break;

        case 3:
          month = 'April';
          break;

        case 4:
          month = 'Mei';
          break;

        case 5:
          month = 'Juni';
          break;

        case 6:
          month = 'Juli';
          break;

        case 7:
          month = 'Agustus';
          break;

        case 8:
          month = 'September';
          break;

        case 9:
          month = 'Oktober';
          break;

        case 10:
          month = 'November';
          break;

        case 11:
          month = 'Desember';
          break;
      }

      return "".concat(date, " ").concat(month, " ").concat(year);
    }
  }, {
    key: "likeButtonInit",
    value: function () {
      var _likeButtonInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                like_button_presenter["a" /* default */].init({
                  likeButtonContainer: this.querySelector('#likeButtonContainer'),
                  favoriteRestaurants: favorite_restaurant_idb["a" /* default */],
                  restaurant: {
                    id: this.id,
                    name: this.name,
                    description: this.description,
                    pictureId: this.pictureId,
                    city: this.city,
                    rating: this.rating
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function likeButtonInit() {
        return _likeButtonInit.apply(this, arguments);
      }

      return likeButtonInit;
    }()
  }, {
    key: "renderReviews",
    value: function () {
      var _renderReviews = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.querySelector('.customer-reviews .items-wrapper').innerHTML = '';
                this.reviews.forEach(function (review) {
                  var item = "\n        <div class=\"item\">\n            <div class=\"item-header\">   \n                <p class=\"reviewer-name\"><b>".concat(review.name, "</b></p>\n                <p class=\"reviewer-date\">").concat(review.date, "</p>\n            </div>\n            <div class=\"item-content\">\n                <p class=\"reviewer-review\">").concat(review.review, "</p>\n            </div>\n        </div>\n        ");
                  _this3.querySelector('.customer-reviews .items-wrapper').innerHTML += item;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function renderReviews() {
        return _renderReviews.apply(this, arguments);
      }

      return renderReviews;
    }()
  }, {
    key: "renderRating",
    value: function renderRating() {
      var ratingStar = this.querySelectorAll('.rating i');

      if (this.rating < 1) {
        ratingStar[0].className = 'bi bis-star-half';
        ratingStar[1].className = 'bi bi-star';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 1) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 2) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-half';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 2) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 3) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-half';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 3) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 4) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-half';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 4) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-fill';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 5) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-fill';
        ratingStar[4].className = 'bi bi-star-half';
      } else if (this.rating == 5) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-fill';
        ratingStar[4].className = 'bi bi-star-fill';
      }
    }
  }]);

  return RestaurantDetail;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.get('restaurant-detail') || customElements.define('restaurant-detail', restaurant_detail_RestaurantDetail);
// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/views/templates/template-creator.js




var template_creator_createRestaurantItemTemplate = function createRestaurantItemTemplate(restaurant) {
  var element = document.createElement('restaurant-item');
  element.classList.add('restaurant-item');
  element.setAttribute('id', restaurant.id);
  element.setAttribute('name', restaurant.name);
  element.setAttribute('description', restaurant.description.slice(0, 350) + (restaurant.description.length > 350 ? '...' : ''));
  element.setAttribute('pictureId', restaurant.pictureId);
  element.setAttribute('pictureUrl', config["a" /* default */].BASE_SMALL_IMAGE_URL + restaurant.pictureId);
  element.setAttribute('city', restaurant.city);
  element.setAttribute('rating', restaurant.rating);
  return element;
};

var template_creator_createSearchItemsTemplate = function createSearchItemsTemplate(restaurants, keyword) {
  var template = '';
  console.log(restaurants);

  for (var i = 0; i < 3; i++) {
    if (restaurants[i]) {
      template += "\n      <li id=\"".concat(restaurants[i].id, "\">\n        <a href=\"#/detail/").concat(restaurants[i].id, "\" class=\"item\">\n          <div class=\"img-wrapper\">\n            <img src=\"").concat(config["a" /* default */].BASE_SMALL_IMAGE_URL + restaurants[i].pictureId, "\" alt=\"Restaurant ").concat(restaurants[i].name, ", ").concat(restaurants[i].city, "\">\n          </div>\n          <div class=\"text\">\n            <h4>").concat(restaurants[i].name, "</h4>\n            <p>\n              <i class=\"bi bi-geo-alt-fill\"></i> ").concat(restaurants[i].city, "\n            </p>\n          </div>\n        </a>\n      </li>\n     ");
    }
  }

  template += "\n    <li>\n      <a href=\"#/search/".concat(keyword, "\" class=\"item link-search-list\">Lihat semua hasil pencarian untuk \"").concat(keyword, "\"</a>\n    </li>\n  ");
  return template;
};

var template_creator_createRestaurantDetailTemplate = function createRestaurantDetailTemplate(restaurant) {
  var element = document.createElement('restaurant-detail');
  element.setAttribute('id', restaurant.id);
  element.setAttribute('name', restaurant.name);
  element.setAttribute('description', restaurant.description);
  element.setAttribute('pictureId', restaurant.pictureId);
  element.setAttribute('pictureUrl', config["a" /* default */].BASE_LARGE_IMAGE_URL + restaurant.pictureId);
  element.setAttribute('address', restaurant.address);
  element.setAttribute('city', restaurant.city);
  element.setAttribute('rating', restaurant.rating);
  element.setMenus(restaurant.menus);
  element.setReviews(restaurant.customerReviews);
  return element;
};

var createLikeRestaurantButtonTemplate = function createLikeRestaurantButtonTemplate() {
  return "\n  <button aria-label=\"sukai restaurant ini\" id=\"likeButton\" class=\"like-button\">\n     <i class=\"bi bi-heart\"></i> Sukai\n  </button>\n";
};

var createUnlikeRestaurantButtonTemplate = function createUnlikeRestaurantButtonTemplate() {
  return "\n  <button aria-label=\"batalkan suka restaurant ini\" id=\"likeButton\" class=\"like-button\">\n    <i class=\"bi bi-heart-fill\"></i> Batalkan\n  </button>\n";
};



/***/ }),

/***/ 23:
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable eqeqeq */
var RestaurantItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RestaurantItem, _HTMLElement);

  var _super = _createSuper(RestaurantItem);

  function RestaurantItem() {
    _classCallCheck(this, RestaurantItem);

    return _super.apply(this, arguments);
  }

  _createClass(RestaurantItem, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.name = this.getAttribute('name') || null;
      this.description = this.getAttribute('description') || null;
      this.pictureId = this.getAttribute('pictureId') || null;
      this.pictureUrl = this.getAttribute('pictureUrl') || null;
      this.city = this.getAttribute('city') || null;
      this.rating = this.getAttribute('rating') || null;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <a aria-label=\"Restaurant ".concat(this.name, ", ").concat(this.city, "\" href=\"/#/detail/").concat(this.id, "\" class=\"item\">\n          <div class=\"item-hero\">\n              <div class=\"img-wrapper\">\n                <img src=\"").concat(this.pictureUrl, "\" alt=\"Restaurant ").concat(this.name, ", ").concat(this.city, "\" class=\"skeleton lazyload\">\n              </div>\n              <div class=\"rating\">\n                  <span class=\"rating-text\">").concat(this.rating, "</span>\n                  <i class=\"bi bi-star\"></i>\n                  <i class=\"bi bi-star\"></i>\n                  <i class=\"bi bi-star\"></i>\n                  <i class=\"bi bi-star\"></i>\n                  <i class=\"bi bi-star\"></i>\n              </div>\n          </div>\n          <div class=\"item-content\">\n              <h4>").concat(this.name, "</h4>\n              <p class=\"lokasi\"><i class=\"bi bi-geo-alt-fill\"></i> ").concat(this.city, "</p>\n              <p class=\"deskripsi\">").concat(this.description, "</p>\n          </div>\n        </a>\n        ");
      var ratingStar = this.querySelectorAll('.rating i');

      if (this.rating < 1) {
        ratingStar[0].className = 'bi bis-star-half';
        ratingStar[1].className = 'bi bi-star';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 1) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 2) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-half';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 2) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 3) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-half';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 3) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 4) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-half';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating == 4) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-fill';
        ratingStar[4].className = 'bi bi-star';
      } else if (this.rating < 5) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-fill';
        ratingStar[4].className = 'bi bi-star-half';
      } else if (this.rating == 5) {
        ratingStar[0].className = 'bi bi-star-fill';
        ratingStar[1].className = 'bi bi-star-fill';
        ratingStar[2].className = 'bi bi-star-fill';
        ratingStar[3].className = 'bi bi-star-fill';
        ratingStar[4].className = 'bi bi-star-fill';
      }
    }
  }]);

  return RestaurantItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.get('restaurant-item') || customElements.define('restaurant-item', RestaurantItem);

/***/ })

}]);