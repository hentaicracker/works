import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state/createStore';

// import App from './App';
import Page from './components/templates';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
