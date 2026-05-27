import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';

function AnalysisPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
          Analysis Workspace
        </h1>
        <p className="font-body text-base" style={{ color: '#94A3B8' }}>
          Multi-tab workspace — agent detail, node graph, call timeline, flagged items, conversation panel
        </p>
      </div>
    </div>
  );
}

function CrossCasePage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
          Cross-Case Engine
        </h1>
        <p className="font-body text-base" style={{ color: '#94A3B8' }}>
          Heatmap correlation matrix, alert feed, comparison table, multi-case network graph
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="/cross-case" element={<CrossCasePage />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}
