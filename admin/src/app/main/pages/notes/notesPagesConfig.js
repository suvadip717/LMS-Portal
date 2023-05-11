import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// const Error404Page = lazy(() => import('./Error404Page'));
const NotesUpload = lazy(() => import('./NotesUpload'));
const NotesManage = lazy(() => import('./NotesManage'));
const NotesEdit = lazy(() => import('./NotesEdit') );

const notesPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/notes',
      children: [
        {
          path: '',
          element: <Navigate to="upload" />,
        },
        {
          path: 'upload',
          element: <NotesUpload />,
        },
        {
          path: 'manage',
          element: <NotesManage />,
        },
        {
          path: ':id',
          element: <NotesEdit />
        }
      ],
    },
  ],
};

export default notesPagesConfig;
