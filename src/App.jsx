// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Register from './pages/Register';
// // import Login from './pages/Login';
// import Login from './pages/UserLogin';
// import ProtectedRoute from './components/ProtectedRoute';
// import Dashboard from './pages/Dashboard';
// import { Suspense } from 'react';

// function App() {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/register" element={<Register />}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/dashboard" element={
//             <ProtectedRoute>
//              <Suspense fallback={<p>Dashboard loading...</p>}>
//                    <Dashboard/>
//               </Suspense>
//             </ProtectedRoute>  
//             }/>
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './pages/UserLogin';
import Dashboard from './pages/Dashboard2';
import ProtectedRoute from './components/ProtectedRoutes2';
import AdminPage from './pages/AdminPage';
import StaffPage from './pages/StaffPage';
import CustomerPage from './pages/CustomerPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute roles={['admin']}>
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path="/staff" element={
            <ProtectedRoute roles={['staff']}>
              <StaffPage />
            </ProtectedRoute>
          } />
          <Route path="/customer" element={
            <ProtectedRoute roles={['customer']}>
              <CustomerPage />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
