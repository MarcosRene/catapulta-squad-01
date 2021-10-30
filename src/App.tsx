import React from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';
import {useAppearance} from './hooks';

import {Toggle} from './components';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.main};
`;

const App = () => {
  const {theme} = useAppearance();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Toggle onPress={() => {}} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
