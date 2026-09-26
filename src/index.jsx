import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import './index.css';
import App from './App';
import appReducer from './reducer';

const store = createStore(appReducer, { mylist: [], recommendations: [] }, applyMiddleware(thunk));
createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>);
