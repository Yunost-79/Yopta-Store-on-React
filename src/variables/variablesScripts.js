
export const urlAPI = 'https://fakestoreapi.com';

export const HEADER_DEFAULT_LINKS_ITEMS = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/about',
    label: 'About',
  },

  {
    to: '/auth/login',
    label: 'Login',
  },
  {
    to: '/auth/sign-up',
    label: 'Sign up',
  },
];

export const HEADER_AUTH_LINKS_ITEMS = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/basket',
    label: 'Basket',
  },
  {
    to:'/profile',
    label: "My Profile",
  },
  {
    to: '/auth/login',
    // func: () => logoutUser(),
    isActions: true,
    label: 'Sign out',
  },
];
