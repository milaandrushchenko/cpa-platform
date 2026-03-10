import { SUPPORTED_LOCALES } from '@constants/locales';
import LandingPage from '@pages/LandingPage';
import NotFound from '@pages/NotFound';

import { createBrowserRouter } from 'react-router-dom';

const localesRoutes = SUPPORTED_LOCALES.map((locale) => ({
  path: `/${locale}`,
  element: <LandingPage />,
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  ...localesRoutes,
  {
    path: '*',
    element: <NotFound />,
  },
]);
