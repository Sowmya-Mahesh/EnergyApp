import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './i18n/i18n';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
