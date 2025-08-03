import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@components/RootLayout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>Hello World</div>,
      },
      {
        path: '/404',
        element: <div>Error</div>,
      },
      {
        path: '/:userIdWithAt',
        element: <div>Profile</div>,
      },
    ],
  },
]);
