import { useState, useEffect } from 'react';

type ColorScheme = 'dark' | 'light';

const defaultColorScheme: ColorScheme = 'dark';

const useColorScheme = (): ColorScheme => {
  const isMatchMediaSupported =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function';

  const query = '(prefers-color-scheme: dark)';

  const getInitialScheme = (): ColorScheme => {
    if (!isMatchMediaSupported) {
      return defaultColorScheme;
    }
    return window.matchMedia(query).matches ? 'dark' : 'light';
  };

  const [scheme, setScheme] = useState<ColorScheme>(getInitialScheme);

  useEffect(() => {
    if (!isMatchMediaSupported) return;

    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setScheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isMatchMediaSupported, query]);

  return scheme;
};

export default useColorScheme;
