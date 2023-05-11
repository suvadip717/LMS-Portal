import SignUpPage from './SignUpPage';
import authRoles from '../../auth/authRoles';
import Error404Page from '../pages/error/Error404Page';

const SignUpConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'sign-up',
      element: <Error404Page />,
    },
  ],
};

export default SignUpConfig;
