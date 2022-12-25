/* eslint-disable import/order */
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';

import './index.css';

import App from './components/App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
