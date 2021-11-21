import React, {useContext} from 'react';
import {Button} from 'react-native';
import {ThemeContext} from 'styled-components';

interface IToggleProps {
  onPress: () => void;
}

export const Toggle = ({onPress}: IToggleProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Button
      color={themeContext.colors.primary.main}
      title="Toggle"
      onPress={onPress}
    />
  );
};
