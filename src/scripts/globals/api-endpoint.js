import CONFIG from './config'

const API_ENDPOINT = {
  RECOMMENDED: `${CONFIG.BASE_URL}list`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`
}

export default API_ENDPOINT
