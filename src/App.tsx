import { useEffect } from 'react';
import './App.css';
import LanguageConfig from './components/LanguageConfig';
import Router from './routes';
import { changeLanguage } from 'i18next';

const App:React.FC = () => {
  useEffect(() => {
    const language = localStorage.getItem('language');
    if(language){
       changeLanguage(language);
    }
  }, []);

  return (
    <div className="App">
     <Router />
     <LanguageConfig />

    </div>
  );
}

export default App;
