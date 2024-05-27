import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditProfile } from './pages/EditProfile';
import { HomeDashboard } from './pages/HomeDashboard';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { Register } from './pages/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<HomeDashboard />} />
            <Route path='/edit' element={<EditProfile />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
