import { SUPPORTED_LOCALES } from '@config/locales';
import LandingPage from '@pages/LandingPage';
import NotFoundPage from '@pages/NotFoundPage';

import { createBrowserRouter } from 'react-router-dom';

const localeRoutes = SUPPORTED_LOCALES.map((locale) => ({
  path: `/${locale}`,
  element: <LandingPage />,
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  ...localeRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
