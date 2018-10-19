import { createContext } from 'react';
import defaultTheme from './defaultTheme';

export default createContext({
  theme: defaultTheme,
  toggleTheme() {},
});
