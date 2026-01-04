import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
