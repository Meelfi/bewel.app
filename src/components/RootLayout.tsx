import { Outlet } from 'react-router';

import useColorScheme from '@hooks/useColorScheme';
import { colorDarkTheme, colorLightTheme } from 'style-themes';

export function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <div className={colorScheme === 'dark' ? colorDarkTheme : colorLightTheme}>
      <Outlet />
    </div>
  );
}
