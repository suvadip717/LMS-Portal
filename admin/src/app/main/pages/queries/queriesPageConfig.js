import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const Error404Page = lazy(() => import('./Error404Page'));
const QueriesDtails = lazy(() => import('./QueryDetails'));
const QueriesManage = lazy(() => import('./QueriesManage'));

const queriesPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/queries',
      children: [
        {
          path: '',
          element: <Navigate to="manage" />,
        },
        {
          path: 'manage',
          element: <QueriesManage />,
        },
        {
            path: ':id',
            element: <QueriesDtails/>
          }
      ],
    },
  ],
};

export default queriesPageConfig;
