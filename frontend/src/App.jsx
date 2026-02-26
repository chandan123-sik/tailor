import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TailorRegistration from './module/tailor/pages/Registration/TailorRegistration';

// Delivery Module Imports
import DeliveryLayout from './module/delivery/layouts/DeliveryLayout';
import DeliveryDashboard from './module/delivery/pages/Dashboard/DeliveryDashboard';
import Tasks from './module/delivery/pages/Tasks/Tasks';
import DeliveryHistory from './module/delivery/pages/History/DeliveryHistory';
import DeliveryProfile from './module/delivery/pages/Profile/DeliveryProfile';

// Consumer Module Imports
import ConsumerLayout from './module/consumer/layouts/ConsumerLayout';
import LandingPage from './module/consumer/pages/Landing/LandingPage';
import StitchingSelection from './module/consumer/pages/Stitching/StitchingSelection';
import MeasurementSystem from './module/consumer/pages/Measurements/MeasurementSystem';
import ConsumerDashboard from './module/consumer/pages/Dashboard/ConsumerDashboard';
import CheckoutPage from './module/consumer/pages/Checkout/CheckoutPage';

import TailorRoutes from './module/tailor/routes/TailorRoutes';

function App() {
  // Application Status for Demo:
  // 'landing': Show registration start
  // 'registering': Show multi-step registration
  // 'pending': Show verification pending screen
  // 'approved': Access to full Tailor Panel (Default for now as per user request to see dashboard)
  const [appState, setAppState] = useState('approved');

  const handleStartRegistration = () => setAppState('registering');
  const handleRegistrationComplete = () => setAppState('pending');
  const handleSimulateApproval = () => setAppState('approved');

  // 1. REGISTRATION & PENDING FLOWS
  if (appState === 'registering') {
    return <TailorRegistration onComplete={handleRegistrationComplete} />;
  }

  if (appState === 'pending') {
    return (
      <div className="min-h-screen bg-[#FDFCFE] flex flex-col items-center justify-center p-8 text-center font-sans">
        <div className="max-w-xl bg-white p-16 md:p-24 rounded-[4rem] shadow-2xl border border-slate-50 relative overflow-hidden">
          <div className="w-24 h-24 bg-primary-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10 animate-bounce-slow text-primary-600 shadow-sm border border-primary-100">
            <span className="text-4xl">⏳</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">Verification Dossier Pending</h2>
          <p className="text-slate-500 font-medium mb-12 leading-relaxed">
            Our curators are currently verifying your workshop credentials.
            This elite marketplace maintains high standards of craftsmanship.
            Expect a notification within 24-48 business hours.
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleSimulateApproval}
              className="bg-primary-600 text-white py-5 rounded-[2rem] font-black shadow-2xl shadow-primary-200 hover:bg-primary-500 active:scale-95 transition-all text-xs uppercase tracking-widest"
            >
              Simulate Enterprise Approval (Demo)
            </button>
            <button
              onClick={() => setAppState('registering')}
              className="text-primary-600 font-black uppercase text-[10px] tracking-widest hover:underline"
            >
              Revisit Registration Dossier
            </button>
          </div>
          {/* Abstract Design */}
          <div className="absolute top-0 right-0 -tr-slate-y-20 tr-slate-x-20 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px]"></div>
        </div>
      </div>
    );
  }

  // 2. MAIN APPLICATION PANELS
  return (
    <Router>
      <Routes>
        {/* Tailor Panel Routes */}
        {TailorRoutes}

        {/* Delivery Partner Panel Routes */}
        <Route path="/delivery" element={<DeliveryLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DeliveryDashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="history" element={<DeliveryHistory />} />
          <Route path="profile" element={<DeliveryProfile />} />
        </Route>

        {/* Consumer Panel Routes */}
        <Route path="/consumer" element={<ConsumerLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="stitching" element={<StitchingSelection />} />
          <Route path="measurements" element={<MeasurementSystem />} />
          <Route path="dashboard" element={<ConsumerDashboard />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="shop" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Readymade Store Coming Soon</h2></div>} />
          <Route path="profile" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Profile Page Coming Soon</h2></div>} />
        </Route>

        {/* Development Helper: Toggle to Registration */}
        <Route path="/demo/register" element={
          <div className="p-20 text-center">
            <button onClick={() => setAppState('registering')} className="btn-primary">View Registration Flow</button>
          </div>
        } />

        {/* Global Redirect */}
        <Route path="/" element={<Navigate to="/delivery" replace />} />
        <Route path="*" element={<Navigate to="/delivery" replace />} />
      </Routes>
    </Router>
  );
}


export default App;
