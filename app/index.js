import './app.global.css';

import { configureStore, history } from './store/configureStore';

import { AppContainer } from 'react-hot-loader';
import LogRocket from 'logrocket';
import React from 'react';
import Root from './containers/Root';
import { render } from 'react-dom';

LogRocket.init('scribeware/electron-react-boilerplate');

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
