import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LanguageConfig from './components/LanguageConfig';
import { ApolloProvider } from '@apollo/client';
import client from './services/apollo/client';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App /> 
        <LanguageConfig />
       </BrowserRouter>
     </ApolloProvider>
  </React.StrictMode>
);
reportWebVitals();
