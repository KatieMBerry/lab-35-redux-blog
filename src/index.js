import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import store from './store';
import { BlogsProvider } from './state/BlogsProvider';

render(
  <BlogsProvider>
    <App />
  </BlogsProvider>,
  document.getElementById('root')
);
