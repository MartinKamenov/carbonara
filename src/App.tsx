import React from 'react';
import { MainRouter } from './components/routing';
import { store } from './redux';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MainRouter/>
    </Provider>
  );
}

export default App;
