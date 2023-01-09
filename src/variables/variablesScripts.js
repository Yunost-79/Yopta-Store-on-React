export const urlAPI = 'https://fakestoreapi.com';
export const urlGeoAPI =
  'https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=ab257c1a034f4a91ac795a44df504023';

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
    to: '/profile',
    label: 'My Profile',
  },
  {
    to: '/auth/login',
    // func: () => logoutUser(),
    isActions: true,
    label: 'Sign out',
  },
];
