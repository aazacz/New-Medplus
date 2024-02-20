import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserAuthCheck,DocotorAuthCheck } from "../Services/Authentication/authentication"

import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

// User Components
import Homepage from '../Pages/HomePage';
import UserLogin from '../Pages/UserLogin';
import LoginSection from '../Components/Patient/LoginSection';
import LoginSectionOtpVerify from '../Components/Patient/LoginSectionOtpVerify';
import PatientSignup from '../Components/Patient/PatientSignup';

import UserDashboard from '../Pages/UserDashboard';
import Overview from '../Components/Patient/Overview';

// import Labresult from "./components/Patient/Labresult";
// import PreviousConsultation from "./components/Patient/PreviousConsultation"
// import ProfileUser from "./components/Patient/ProfileUser";

// Admin Components

// import LoginSectionAdmin from "./components/Admin/Admin_Login_Section/LoginSectionAdmin";
// import AdminDashboard from "./pages/AdminDashboard";
// import Customers from "./components/Admin/Customers";



// Doctor Components
// import DoctorLogin from "./pages/DoctorLogin";
// import LoginSectionDoctor from "./components/Doctor/Doctor_Login_Section/LoginSectionDoctor";
// import DoctorSignup from "./pages/DoctorSignup";
// import DoctorDashboard from "./pages/DoctorDashboard";
// import NewConsultation from './components/Patient/NewConsultation';
// import DoctorOverview from "./components/Doctor/DoctorOverview";
// import DoctorsList from './components/Admin/DoctorsList';
// import AddDoctor from './components/Admin/AddDoctor';
// import UserDashboardAuth from './Services/UserDashboardAuth';
// import PrivateRouter from './Services/Private Router/PrivateRouter';
// import PrivateRouterDoctor from './Services/Private Router/PrivateRouterDoctor';
import ErrorPage from "../Pages/ErrorPage"
import PreviousConsultation from '../Components/Patient/PreviousConsultation';
import NewConsultation from '../Components/Patient/NewConsultation';
import PrivateLoginRoute from '../Components/PrivateRoute/PrivateLoginRoute';
import DoctorLogin from '../Pages/DoctorLogin';
import LoginSectionDoctor from '../Components/Doctor/LoginSectionDoctor';
import DoctorDashboard from '../Pages/DoctorDashboard';
import DoctorOverview from '../Components/Doctor/DoctorOverview';
import AdminLogin from '../Pages/AdminLogin';
import LoginSectionAdmin from '../Components/Admin/LoginSectionAdmin';
import AdminDashboard from '../Pages/AdminDashboard';
// import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import NextConsultation from './components/Doctor/NextConsultation.jsx';
// import HomePageDeptPage from './components/HomePageDeptPage.jsx';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/login' element={<PrivateLoginRoute  AuthCheck={UserAuthCheck} role="User"> <UserLogin /> </PrivateLoginRoute>}>
          <Route index element={<LoginSection />} />
          <Route path='verifyotp' element={<LoginSectionOtpVerify />} />
        </Route>

        <Route path='/signup' element={<PatientSignup />} />

        <Route path='/userdashboard' element={<PrivateRoute AuthCheck={UserAuthCheck}  role="User">  <UserDashboard /> </PrivateRoute>}>
          <Route index element={<Overview />} />
          <Route path='PreviousConsultation' element={<PreviousConsultation />} />
          <Route path='BookConsultation' element={<NewConsultation />} />
        </Route>
        
        <Route path='/doctor' element={<PrivateLoginRoute AuthCheck={DocotorAuthCheck} role="Doctor">  <DoctorLogin />  </PrivateLoginRoute>} >
          <Route index element={<LoginSectionDoctor />} />
          {/* <Route path='verifyotp' element={<LoginSectionOtpVerify />} /> */}
        </Route>
         
        <Route path='/doctordashboard' element={ <PrivateRoute AuthCheck={DocotorAuthCheck}  role="Doctor" ><DoctorDashboard /></PrivateRoute> }>
          <Route index element={<DoctorOverview />} />
          {/* <Route path='Overview' element={<DoctorOverview />} />
          <Route path='labresult' element={<Labresult />} />
          <Route path='consultation' element={<NextConsultation/>} />
          <Route path='profile' element={<div>profile loaded</div>} /> */}
        </Route>
         
        <Route path='/admin' element={<AdminLogin />}>
          <Route index element={<LoginSectionAdmin />} />
        </Route>
         
        <Route path='/adminDashboard' element={<AdminDashboard />}>
          <Route index element={<Overview />} />
          {/* <Route path='customers' element={<Customers />} />
          <Route path='DoctorsList' element={<DoctorsList />} />
          <Route path='AddDoctor' element={<AddDoctor />} />
          <Route path='Profile' element={<ProfileUser />} />
          <Route path='labresult' element={<Labresult />} /> */}
        </Route>
         
         
          {/*
         
          <Route path='Profile' element={<ProfileUser />} />
          <Route path='labresult' element={<Labresult />} />
          */}
        {/* <Route path='/department' element={<HomePageDeptPage />} /> */}

        {/*



 */
}

        {/* <Route path='/doctor/signup' element={<DoctorSignup />} /> */}




        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}






export default Routers
