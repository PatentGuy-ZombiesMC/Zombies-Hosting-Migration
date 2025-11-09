import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MaintenancePage from './components/MaintenancePage';
import MigrationPage from './components/MigrationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/migration" element={<MigrationPage />} />
        <Route path="/" element={<Navigate to="/maintenance" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
