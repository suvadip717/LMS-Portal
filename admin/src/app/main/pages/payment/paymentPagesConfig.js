import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const Error404Page = lazy(() => import('./Error404Page'));
const Payment = lazy(() => import('./Payment'));
// const NoticeManage = lazy(() => import('./NoticeManage'));

const paymentPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/payment',
      element: <Payment />,
    },
      // children: [
      //   {
      //     path: '',
      //     element: <Navigate to="upload" />,
      //   },
      //   {
      //     path: 'upload',
      //     element: <NoticeUpload />,
      //   },
      //   {
      //     path: 'manage',
      //     element: <NoticeManage />,
      //   },
      // ],
    // },
  ],
};

export default paymentPagesConfig;
