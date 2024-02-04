import { useTranslation } from 'react-i18next';

const NotFound:React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
        <h1>{t('Page not found')}</h1>
        </div>
    );
};

export default NotFound;
