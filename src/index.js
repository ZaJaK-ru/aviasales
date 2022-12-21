/* eslint-disable import/order */
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import './index.css';

import App from './components/App';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
