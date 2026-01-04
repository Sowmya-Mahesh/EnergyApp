
import { useTranslation } from 'react-i18next';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  return <h2>{t('nav.settings')}</h2>;
};

export default Settings;