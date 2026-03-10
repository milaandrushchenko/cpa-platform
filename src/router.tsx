import { SUPPORTED_LOCALES } from '@config/locales';
import LandingPage from '@pages/LandingPage';

import { createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '@/pages/NotFoundPage';

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
