import { removeToken } from "../helpers/tokenHelper";

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
    to: '/auth/login',
    func: () => removeToken(),
    label: 'Sign out',
  },
];
