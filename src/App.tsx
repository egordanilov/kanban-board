import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { store } from './store/store';
import { Outlet, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AddTask from './pages/AddTask';
import Board from './pages/Board';
import LandingPage from './pages/LandingPage';

function App():ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/add-task" element={<AddTask />} />
        </Routes>
        <Outlet />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
