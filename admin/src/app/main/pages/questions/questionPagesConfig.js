import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const Error404Page = lazy(() => import('./Error404Page'));
const QuestionUpload = lazy(() => import('./QuestionUpload'));
const QuestionManage = lazy(() => import('./QuestionManage'));
const QuestionEdit = lazy(() => import('./QuestionEdit'));

const questionPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/question',
      children: [
        {
          path: '',
          element: <Navigate to="upload" />,
        },
        {
          path: 'upload',
          element: <QuestionUpload />,
        },
        {
          path: 'manage',
          element: <QuestionManage />,
        },
        {
          path: ':id',
          element: <QuestionEdit />
        }
      ],
    },
  ],
};

export default questionPagesConfig;
