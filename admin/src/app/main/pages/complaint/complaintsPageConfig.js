import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ComplaintManage from './ComplaintManage';

// const Error404Page = lazy(() => import('./Error404Page'));
const CoplaintsManage = lazy(() => import('./ComplaintManage'));
const ComplaintDetails = lazy(() => import('./ComplaintDetails'));

const complaintsPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/complaint',
      children: [
        {
          path: '',
          element: <Navigate to="manage" />,
        },
        {
          path: 'manage',
          element: <ComplaintManage />,
        },
        {
            path: ':id',
            element: <ComplaintDetails/>
          }
      ],
    },
  ],
};

export default complaintsPageConfig;
