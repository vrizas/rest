import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import Like from '../views/pages/like'
import Error from '../views/pages/error'

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/like': Like,
  '/error': Error
}

export default routes
