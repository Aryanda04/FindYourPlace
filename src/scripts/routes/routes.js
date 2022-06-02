import Home from '../views/pages/home';
import Wisata from '../views/pages/wisata';
import UMKM from '../views/pages/umkm';
import Budaya from '../views/pages/budaya';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/wisata': Wisata,
  '/umkm': UMKM,
  '/budaya': Budaya,
  '/detail/:id': Detail,
};

export default routes;
