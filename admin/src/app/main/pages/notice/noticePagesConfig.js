import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const Error404Page = lazy(() => import('./Error404Page'));
const NoticeUpload = lazy(() => import('./NoticeUpload'));
const NoticeManage = lazy(() => import('./NoticeManage'));
const NoticeEdit = lazy(() => import('./NoticeEdit'));

const noticePagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/notice',
      children: [
        {
          path: '',
          element: <Navigate to="upload" />,
        },
        {
          path: 'upload',
          element: <NoticeUpload />,
        },
        {
          path: 'manage',
          element: <NoticeManage />,
        },
        {
          path: ':id',
          element: <NoticeEdit />
        }
      ],
    },
  ],
};

export default noticePagesConfig;
