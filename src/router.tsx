import { createBrowserRouter } from 'react-router-dom';

import LocaleHandler from '@/components/LocaleHandler';
import { SUPPORTED_LOCALES } from '@/config/locales';
import LandingPage from '@/pages/LandingPage';
import NotFoundPage from '@/pages/NotFoundPage';

const localeRoutes = SUPPORTED_LOCALES.map((locale) => ({
  path: locale,
  element: <LandingPage />,
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LocaleHandler />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      ...localeRoutes,
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
