import {useState, useEffect, useCallback, useMemo} from 'react';
import {Appearance} from 'react-native';
import {Props, themeType, colorSchemeProps} from '../_types';
import {light, dark} from '../../constants/styles/themes';

export const useAppearance = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<themeType>(
    Appearance.getColorScheme() || 'light',
  );

  const handleChangeAppearance = useCallback(
    ({colorScheme}: colorSchemeProps) => {
      if (colorScheme) setCurrentTheme(colorScheme);
    },
    [],
  );

  const theme = useMemo(() => {
    if (currentTheme === 'light') {
      return light;
    }

    return dark;
  }, [currentTheme]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(handleChangeAppearance);

    return () => subscription.remove();
  }, [handleChangeAppearance]);

  return {currentTheme, theme};
};
