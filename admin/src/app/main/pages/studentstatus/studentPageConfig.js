import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const Error404Page = lazy(() => import('./Error404Page'));
const StudentAdd = lazy(() => import('./StudentAdd'));
const StudentManage = lazy(() => import('./StudentManage'));
const StudentEdit = lazy(() => import('./StudentEdit'));

const studentPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/students',
      children: [
        {
          path: '',
          element: <Navigate to="manage" />,
        },
        {
          path: 'add',
          element: <StudentAdd />,
        },
        {
          path: 'manage',
          element: <StudentManage />,
        },
        {
          path: ':id',
          element: <StudentEdit/>
        }
      ],
    },
  ],
};

export default studentPageConfig;
