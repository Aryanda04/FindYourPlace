import Home from '../views/pages/home';
import Wisata from '../views/pages/wisata';
import UMKM from '../views/pages/umkm';
import Budaya from '../views/pages/budaya';
import DetailWisata from '../views/pages/wisata-detail';
import DetailBudaya from '../views/pages/budaya-detail';
import DetailUMKM from '../views/pages/umkm-detail';

const routes = {
  '/': Home,
  '/wisata': Wisata,
  '/umkm': UMKM,
  '/budaya': Budaya,
  '/detail-wisata/:id': DetailWisata,
  '/detail-budaya/:id': DetailBudaya,
  '/detail-umkm/:id': DetailUMKM,

};

export default routes;
