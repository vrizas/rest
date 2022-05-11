import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import Like from '../views/pages/like'
import InternalError from '../views/pages/error/internal-error'
import Error404 from './../views/pages/error/404'

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/like': Like,
  '/internalerror': InternalError,
  '/404': Error404
}

export default routes
