!function(n){function e(e){for(var r,o,s=e[0],p=e[1],l=e[2],h=0,c=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&c.push(i[o][0]),i[o]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(n[r]=p[r]);for(d&&d(e);c.length;)c.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,s=1;s<t.length;s++){var p=t[s];0!==i[p]&&(r=!1)}r&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},i={6:0},a=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],p=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=p;a.push([32,1,2,0,4,3,5]),t()}({23:function(n,e,t){var r=t(8),i=t(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},24:function(n,e,t){(e=t(9)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap);"]),e.push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml {\n  scroll-behavior: smooth; }\n\nbody {\n  background-color: #fdfffe;\n  font-family: "Inter", sans-serif;\n  max-width: 100%;\n  color: #2e2d2d; }\n\na {\n  display: inline-flex;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n  color: #2e2d2d;\n  align-items: center;\n  justify-content: center; }\n\ninput {\n  min-width: 44px;\n  min-height: 44px; }\n\nbutton {\n  min-width: 44px;\n  min-height: 44px;\n  background-color: transparent;\n  border: none;\n  color: #2e2d2d;\n  cursor: pointer; }\n\nul {\n  list-style-type: none; }\n\n.skip-link {\n  position: fixed;\n  top: 90px;\n  left: -200px;\n  background-color: #f4a304;\n  border-radius: 5px;\n  color: #fdfffe;\n  padding: 8px;\n  z-index: 101; }\n\n.skip-link:focus {\n  left: 0; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  background-color: #fdfffe;\n  position: sticky;\n  top: 0;\n  z-index: 100; }\n  header .logo-wrapper {\n    position: relative; }\n    header .logo-wrapper.active::after {\n      content: "";\n      position: absolute;\n      width: 100%;\n      height: 2.5px;\n      background-color: #fcc915;\n      bottom: 5px;\n      left: 0;\n      transition: 0.3s; }\n    header .logo-wrapper::after {\n      content: "";\n      position: absolute;\n      width: 0;\n      height: 2.5px;\n      background-color: #fcc915;\n      bottom: 5px;\n      left: 0;\n      transition: 0.3s; }\n  header .logo {\n    font-size: 18px;\n    font-weight: 700; }\n  header nav {\n    display: flex;\n    gap: 5px; }\n    header nav a {\n      position: relative;\n      font-size: 16px;\n      font-weight: 500; }\n      header nav a.active::after {\n        content: "";\n        position: absolute;\n        width: 100%;\n        height: 2.5px;\n        background-color: #fcc915;\n        bottom: 5px;\n        left: 0;\n        transition: 0.3s; }\n      header nav a::after {\n        content: "";\n        position: absolute;\n        width: 0;\n        height: 2.5px;\n        background-color: #fcc915;\n        bottom: 5px;\n        left: 0;\n        transition: 0.3s; }\n      header nav a:hover::after {\n        width: 100%; }\n    header nav i {\n      font-size: 17px; }\n  header #hamburgerButton i {\n    font-size: 22px; }\n  header #navigationDrawer {\n    display: none;\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5); }\n    header #navigationDrawer.open {\n      display: inherit; }\n    header #navigationDrawer ul {\n      transform: translate(500px, 0);\n      transition: transform 0.3s ease-in-out;\n      position: fixed;\n      display: flex;\n      flex-direction: column;\n      gap: 30px;\n      align-items: center;\n      background-color: whitesmoke;\n      width: 75%;\n      height: 100vh;\n      top: 0;\n      right: 0; }\n      header #navigationDrawer ul li:nth-child(1) {\n        margin-top: 10px; }\n      header #navigationDrawer ul.open {\n        transform: translate(0, 0); }\n\n@media screen and (min-width: 768px) {\n  header #navigationDrawer ul {\n    transform: translate(800px, 0); }\n  header #home .rekomendasi .restaurants-wrapper,\n  header #like .restaurants-wrapper {\n    grid-template-columns: repeat(2, 1fr); } }\n\n@media screen and (min-width: 992px) {\n  header {\n    padding: 5px 30px; }\n    header button#hamburgerButton,\n    header button#openSearch {\n      display: none; }\n    header #navigationDrawer {\n      display: inherit;\n      position: static;\n      background-color: transparent;\n      width: fit-content;\n      height: fit-content; }\n      header #navigationDrawer ul {\n        transform: translate(0, 0);\n        position: static;\n        flex-direction: row;\n        gap: 40px;\n        align-items: center;\n        background-color: transparent;\n        width: fit-content;\n        height: fit-content; }\n        header #navigationDrawer ul li:nth-child(1) {\n          margin-top: 0; } }\n\n.skeleton {\n  animation: skeleton-loading 1s linear infinite alternate; }\n\n.skeleton-text {\n  width: 100%;\n  height: 0.6rem;\n  margin-bottom: 0.25rem;\n  border-radius: 0.125rem; }\n\n.skeleton-text:last-child {\n  margin-bottom: 0; }\n\n@keyframes skeleton-loading {\n  0% {\n    background-color: #a3b8c2; }\n  100% {\n    background-color: #f0f3f5; } }\n\nh3 {\n  position: relative;\n  font-size: 18px;\n  margin-bottom: 25px;\n  width: fit-content; }\n  h3::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 2.5px;\n    background-color: #fcc915;\n    bottom: -5px;\n    left: 0; }\n\n#home h4 .skeleton-text:last-child,\n#home .lokasi .skeleton-text:last-child {\n  width: 30%; }\n\n#home .deskripsi .skeleton-text:last-child {\n  width: 80%; }\n\n#home .hero {\n  width: 100%;\n  height: 45vh;\n  position: relative; }\n  #home .hero img.jumbotron {\n    width: 100%;\n    height: 100%;\n    object-fit: cover; }\n  #home .hero h2 {\n    font-size: 20px;\n    color: #fdfffe; }\n  #home .hero .hero-content {\n    position: absolute;\n    bottom: 30px;\n    left: 15px; }\n\n#home .menu-of-the-week {\n  padding: 45px 15px;\n  margin-bottom: 20px; }\n  #home .menu-of-the-week .items-wrapper {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 20px; }\n    #home .menu-of-the-week .items-wrapper .item {\n      border-radius: 10px;\n      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n      display: flex;\n      flex-direction: column;\n      text-decoration: none;\n      color: #2e2d2d; }\n      #home .menu-of-the-week .items-wrapper .item img {\n        width: 100%;\n        height: 200px;\n        object-fit: cover;\n        border-radius: 10px; }\n      #home .menu-of-the-week .items-wrapper .item h4 {\n        font-size: 15px;\n        color: #2e2d2d;\n        text-align: center;\n        padding: 10px; }\n\n#detail .rating .skeleton-text:last-child {\n  width: 20%; }\n\n#detail .restaurant-name .skeleton-text:last-child,\n#detail .restaurant-address .skeleton-text:last-child {\n  width: 35%; }\n\n#detail .skeleton-text:last-child {\n  width: 80%; }\n\n#detail .menus .skeleton-text {\n  width: 30%; }\n\n#detail .customer-reviews .item-header .skeleton-text {\n  width: 20%; }\n\n#detail .customer-reviews form .skeleton-form .skeleton-text:nth-child(1) {\n  height: 2.8rem; }\n\n#detail .customer-reviews form .skeleton-form .skeleton-text:nth-child(2) {\n  height: 5rem;\n  width: 100%; }\n\n#detail .customer-reviews form .action .skeleton-text {\n  height: 2.5rem;\n  width: 20%; }\n\n#detail .divider {\n  background-color: lightgray;\n  width: 100%;\n  height: 1px;\n  margin: 20px 0 0 0; }\n\n#detail button {\n  cursor: pointer;\n  border: none; }\n\n#detail button,\n#detail input,\n#detail textarea {\n  min-width: 44px;\n  min-height: 44px; }\n\n#detail p,\n#detail li,\n#detail input,\n#detail textarea {\n  font-size: 14px; }\n\n#detail input,\n#detail textarea {\n  padding: 7px 10px;\n  border-radius: 3px;\n  border: 1px solid gray; }\n\n#detail textarea {\n  font-family: "Inter", sans-serif;\n  resize: vertical; }\n\n#detail ul {\n  list-style-type: disc; }\n\n#detail .hero {\n  width: 100%;\n  height: 35vh; }\n\n#detail .hero img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover; }\n\n#detail .rating {\n  font-size: 14px; }\n\n#detail .rating i {\n  color: #fcc915;\n  font-size: 15px; }\n\n#detail .rating-text {\n  margin-left: 5px;\n  font-weight: 500; }\n\n#detail .content {\n  padding: 20px 15px; }\n\n#detail .top-content,\n#detail .top-content .left-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px; }\n\n#detail .content-header-wrapper,\n#detail .menus-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  position: relative; }\n\n#detail .content-header h2 {\n  font-size: 18px; }\n\n#detail #likeButtonContainer {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n#detail .like-button {\n  background-color: #e4565e;\n  color: #fdfffe;\n  font-size: 15px;\n  padding: 10px 15px;\n  border-radius: 7px; }\n\n#detail .like-button i {\n  margin-right: 3px;\n  font-size: 14px; }\n\n#detail h3 {\n  font-size: 17px;\n  margin-bottom: 5px; }\n  #detail h3::after {\n    content: none; }\n\n#detail h4 {\n  font-size: 15px;\n  margin-bottom: 3px; }\n\n#detail .menus-wrapper ul {\n  margin-left: 25px; }\n\n#detail .customer-reviews {\n  margin-top: 20px;\n  word-wrap: break-word;\n  word-break: break-all; }\n\n#detail .customer-reviews form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px; }\n\n#detail .customer-reviews form .action button {\n  background-color: #f4a304;\n  color: #fdfffe;\n  padding: 10px 45px;\n  border-radius: 7px;\n  font-weight: bold; }\n\n#detail .customer-reviews .items-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 35px; }\n\n#detail .customer-reviews .item-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px; }\n\n#like p {\n  font-size: 14px; }\n\n#search p {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 10px; }\n  #search p:last-child {\n    margin-bottom: 0;\n    font-weight: 400; }\n\n#search .restaurants-wrapper {\n  margin-top: 20px; }\n\n#like,\n#search,\n#error {\n  min-height: calc(100vh - 156px); }\n\n#home .rekomendasi,\n#like #restaurant,\n#search {\n  padding: 10px 15px; }\n\n#home .rekomendasi .restaurants-wrapper,\n#like .restaurants-wrapper,\n#search .restaurants-wrapper {\n  display: grid;\n  gap: 20px; }\n\n#error {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center; }\n  #error figure {\n    text-align: center; }\n    #error figure img {\n      height: 60vh; }\n    #error figure figcaption {\n      font-size: 14px; }\n  #error p {\n    font-weight: 700; }\n    #error p a {\n      color: #fdfffe;\n      background-color: #f4a304;\n      padding: 15px 20px;\n      border-radius: 10px;\n      font-weight: 400; }\n      #error p a:hover {\n        background-color: #fcc915; }\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  main .search-container {\n    display: none;\n    width: 100%;\n    height: 100vh;\n    background-color: #fdfffe;\n    padding: 10px 15px;\n    position: fixed;\n    z-index: 102;\n    top: 0;\n    left: 0;\n    overflow-y: auto; }\n    main .search-container .flex-container {\n      display: flex; }\n    main .search-container i.bi-chevron-left {\n      font-size: 25px; }\n  main .search-wrapper {\n    width: 100%;\n    display: flex;\n    height: fit-content;\n    position: relative; }\n    main .search-wrapper input {\n      width: 93%;\n      min-height: 44px;\n      border: none;\n      border-radius: 5px 0 0 5px;\n      padding: 10px 15px 10px 45px;\n      background-color: whitesmoke; }\n    main .search-wrapper button {\n      width: 7%;\n      color: black;\n      font-weight: 500;\n      background-color: #fcc915;\n      padding: 5px 10px;\n      border-radius: 0 5px 5px 0; }\n    main .search-wrapper i {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      left: 15px; }\n  main .search-list {\n    position: absolute;\n    width: 100%;\n    left: 50%;\n    transform: translateX(-50%); }\n    main .search-list li {\n      background-color: #fdfffe;\n      border-radius: 10px;\n      margin-top: 5px; }\n    main .search-list .item {\n      padding: 20px 25px;\n      width: 100%;\n      height: 100%;\n      border-radius: 10px;\n      justify-content: start;\n      gap: 10px; }\n      main .search-list .item.link-search-list {\n        font-size: 14px;\n        font-weight: 500; }\n        main .search-list .item.link-search-list:hover {\n          background-color: #fcc915; }\n      main .search-list .item .img-wrapper {\n        width: 80px;\n        height: 55px; }\n      main .search-list .item img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: 5px; }\n      main .search-list .item p {\n        font-size: 14px;\n        font-weight: 500;\n        color: #585858;\n        margin-top: 3px; }\n  main .rekomendasi .restaurants-wrapper,\n  main .like .restaurants-wrapper,\n  main .search .restaurants-wrapper {\n    grid-template-columns: repeat(1, 1fr); }\n    main .rekomendasi .restaurants-wrapper .item,\n    main .like .restaurants-wrapper .item,\n    main .search .restaurants-wrapper .item {\n      width: 100%;\n      height: 450px;\n      border-radius: 10px;\n      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      text-decoration: none;\n      color: #2e2d2d; }\n    main .rekomendasi .restaurants-wrapper .item .img-wrapper,\n    main .like .restaurants-wrapper .item .img-wrapper,\n    main .search .restaurants-wrapper .item .img-wrapper {\n      width: 100%;\n      height: 240px;\n      object-fit: cover; }\n    main .rekomendasi .restaurants-wrapper .item img,\n    main .like .restaurants-wrapper .item img,\n    main .search .restaurants-wrapper .item img {\n      width: 100%;\n      height: 100%;\n      border-radius: 10px; }\n    main .rekomendasi .restaurants-wrapper .item-hero,\n    main .like .restaurants-wrapper .item-hero,\n    main .search .restaurants-wrapper .item-hero {\n      position: relative;\n      width: 100%; }\n    main .rekomendasi .restaurants-wrapper .rating,\n    main .like .restaurants-wrapper .rating,\n    main .search .restaurants-wrapper .rating {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: 5px;\n      width: 135px;\n      height: 30px;\n      box-sizing: border-box;\n      background-color: #fdfffe;\n      padding: 5px 7px;\n      border-radius: 5px 0 0 0;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      font-size: 14px; }\n    main .rekomendasi .restaurants-wrapper .rating i,\n    main .like .restaurants-wrapper .rating i,\n    main .search .restaurants-wrapper .rating i {\n      color: #fcc915;\n      font-size: 15px; }\n    main .rekomendasi .restaurants-wrapper .rating-text,\n    main .like .restaurants-wrapper .rating-text,\n    main .search .restaurants-wrapper .rating-text {\n      margin-right: 3px;\n      font-weight: 500; }\n    main .rekomendasi .restaurants-wrapper .item-content,\n    main .like .restaurants-wrapper .item-content,\n    main .search .restaurants-wrapper .item-content {\n      padding: 10px 20px 20px 20px; }\n    main .rekomendasi .restaurants-wrapper .item-content h4,\n    main .like .restaurants-wrapper .item-content h4,\n    main .search .restaurants-wrapper .item-content h4 {\n      font-size: 16px;\n      margin-bottom: 5px; }\n    main .rekomendasi .restaurants-wrapper .item-content .lokasi,\n    main .like .restaurants-wrapper .item-content .lokasi,\n    main .search .restaurants-wrapper .item-content .lokasi {\n      font-size: 14px;\n      font-weight: 500;\n      color: #585858;\n      margin-bottom: 10px; }\n    main .rekomendasi .restaurants-wrapper .item-content .lokasi i,\n    main .like .restaurants-wrapper .item-content .lokasi i,\n    main .search .restaurants-wrapper .item-content .lokasi i {\n      font-size: 13px; }\n    main .rekomendasi .restaurants-wrapper .item-content .deskripsi,\n    main .like .restaurants-wrapper .item-content .deskripsi,\n    main .search .restaurants-wrapper .item-content .deskripsi {\n      font-size: 14px; }\n\n#flashMessage {\n  display: none;\n  opacity: 0;\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  z-index: 9999;\n  color: #fdfffe;\n  padding: 10px 15px;\n  border-radius: 7px;\n  transition: 0.3s; }\n  #flashMessage .flashMessage__content {\n    display: flex;\n    gap: 20px; }\n    #flashMessage .flashMessage__content .flashMessage__message {\n      font-size: 15px; }\n    #flashMessage .flashMessage__content button {\n      min-width: auto;\n      min-height: auto;\n      color: #fdfffe;\n      font-size: 18px; }\n\n#flashMessage.active {\n  opacity: 1; }\n  #flashMessage.active.error {\n    background-color: #e4565e; }\n  #flashMessage.active.success {\n    background-color: #28a745; }\n\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fcc915;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(24px, 0); } }\n\n@media screen and (min-width: 576px) {\n  #home .menu-of-the-week .items-wrapper {\n    grid-template-columns: repeat(3, 1fr); }\n  main .rekomendasi .restaurants-wrapper,\n  main .like .restaurants-wrapper,\n  main .search .restaurants-wrapper {\n    grid-template-columns: repeat(2, 1fr); }\n    main .rekomendasi .restaurants-wrapper .item-content,\n    main .like .restaurants-wrapper .item-content,\n    main .search .restaurants-wrapper .item-content {\n      padding: 10px 40px 20px 20px; } }\n\n@media screen and (min-width: 768px) {\n  #navigationDrawer ul {\n    transform: translate(800px, 0); }\n  #detail .top-content .left-content,\n  #detail .customer-reviews {\n    width: 85%; } }\n\n@media screen and (min-width: 992px) {\n  #home .hero {\n    height: calc(100vh - 54px);\n    position: relative;\n    z-index: 99; }\n    #home .hero h2 {\n      text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);\n      font-size: 26px; }\n    #home .hero .hero-content {\n      width: 60%;\n      height: fit-content;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 25px;\n      bottom: 0;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -60%); }\n    #home .hero .search-container-desktop {\n      width: 100%;\n      position: relative; }\n    #home .hero .search-wrapper-desktop {\n      width: 100%;\n      display: flex; }\n      #home .hero .search-wrapper-desktop input {\n        width: 93%;\n        min-height: 44px;\n        border: none;\n        border-radius: 5px 0 0 5px;\n        padding: 10px 15px 10px 45px; }\n      #home .hero .search-wrapper-desktop button {\n        width: 7%;\n        color: black;\n        font-weight: 500;\n        background-color: #fcc915;\n        padding: 10px 15px;\n        border-radius: 0 5px 5px 0; }\n      #home .hero .search-wrapper-desktop i {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: 15px; }\n    #home .hero .search-list-desktop {\n      position: absolute;\n      width: 100%; }\n      #home .hero .search-list-desktop li {\n        background-color: #fdfffe;\n        border-radius: 10px;\n        margin-top: 5px;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; }\n      #home .hero .search-list-desktop .item {\n        padding: 20px 25px;\n        width: 100%;\n        height: 100%;\n        border-radius: 10px;\n        justify-content: start;\n        gap: 10px; }\n        #home .hero .search-list-desktop .item.link-search-list {\n          font-size: 14px;\n          font-weight: 500; }\n          #home .hero .search-list-desktop .item.link-search-list:hover {\n            background-color: #fcc915; }\n        #home .hero .search-list-desktop .item .img-wrapper {\n          width: 80px;\n          height: 55px; }\n        #home .hero .search-list-desktop .item img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n          border-radius: 5px; }\n        #home .hero .search-list-desktop .item p {\n          font-size: 14px;\n          font-weight: 500;\n          color: #585858;\n          margin-top: 3px; }\n  #home .menu-of-the-week {\n    padding: 45px 30px; }\n    #home .menu-of-the-week .items-wrapper {\n      grid-template-columns: repeat(4, 1fr); }\n  #detail .content {\n    padding: 20px 30px; }\n  #detail .top-content .left-content,\n  #detail .customer-reviews {\n    width: 60%; }\n  #detail .top-content {\n    flex-direction: row; }\n  #detail .menus {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    position: relative; }\n  #detail .menus-wrapper {\n    width: 50%;\n    height: fit-content;\n    padding: 20px 30px;\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n    border-radius: 10px;\n    position: absolute; }\n  #detail .menus .divider {\n    display: none; }\n  #home .rekomendasi,\n  #like #restaurant {\n    padding: 10px 30px; }\n  main .rekomendasi .restaurants-wrapper,\n  main .like .restaurants-wrapper,\n  main .search .restaurants-wrapper {\n    grid-template-columns: repeat(3, 1fr); } }\n\n@media screen and (min-width: 1200px) {\n  #home .hero img.jumbotron {\n    min-width: 1000px; } }\n\n@media screen and (min-width: 1400px) {\n  #home .menu-of-the-week .items-wrapper {\n    grid-template-columns: repeat(5, 1fr); }\n  main .rekomendasi .restaurants-wrapper,\n  main .like .restaurants-wrapper,\n  main .search .restaurants-wrapper {\n    grid-template-columns: repeat(4, 1fr); } }\n\n@media screen and (min-width: 1900px) {\n  #home .menu-of-the-week .items-wrapper {\n    grid-template-columns: repeat(6, 1fr); }\n  main .rekomendasi .restaurants-wrapper,\n  main .like .restaurants-wrapper,\n  main .search .restaurants-wrapper {\n    grid-template-columns: repeat(7, 1fr); } }\n\nfooter {\n  background-color: #fcc915;\n  color: black;\n  text-align: center;\n  padding: 20px;\n  font-size: 14px;\n  margin-top: 45px; }\n',""]),n.exports=e}});