import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const PrivateRoute = () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
