import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login';
import Events from './pages/Events/Events';
import Register from './pages/Register';
import VolunteerTable from './pages/Dashboard/VolunteerTable';
import AddEvent from './pages/Dashboard/AddEvent';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './PrivateRoutes/UserPrivateRoute';
import UserPrivateRoute from './PrivateRoutes/UserPrivateRoute';
import UserDashboard from './pages/Dashboard/UserDashboard';
import RegPrivateRouter from './PrivateRoutes/RegPrivateRouter';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/Dashboard/AdminDashboard';

function App() {
  return (
    <AuthContext>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<Login />} />

          {/* Private routes  */}
          <Route path='/dashboard' element={
            <UserPrivateRoute>
              <UserDashboard />
            </UserPrivateRoute>
          }>
          </Route>
          <Route path='/register/:id' element={
            <RegPrivateRouter>
              <Register />
            </RegPrivateRouter>
          }>
          </Route>

          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />}>
            <Route path='volunteer-list' element={<VolunteerTable />} />
            <Route path='add-event' element={<AddEvent />} />
          </Route>

          {/* <Route path='/dashboard' element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} >
            <Route path='volunteer-list' element={<VolunteerTable />} />
            <Route path='add-event' element={<AddEvent />} />
          </Route> */}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
