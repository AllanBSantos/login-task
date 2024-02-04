import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo/client';
import AuthProvider from './components/AuthProvider';
import { CookiesProvider } from 'react-cookie';
import './lib/i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AuthProvider>
            <App /> 
          </AuthProvider>
        </BrowserRouter>
      </ApolloProvider>
    </CookiesProvider>
  </React.StrictMode>
);
reportWebVitals();
