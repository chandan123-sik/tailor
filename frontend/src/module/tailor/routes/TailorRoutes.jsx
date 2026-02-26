import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import TailorLayout from '../layouts/TailorLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import StitchingOrders from '../pages/Orders/StitchingOrders';
import MiniShop from '../pages/Shop/MiniShop';
import TailorProfile from '../pages/Profile/TailorProfile';
import TailorNotifications from '../pages/Notifications/TailorNotifications';

const TailorRoutes = (
    <Route path="/tailor" element={<TailorLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<StitchingOrders />} />
        <Route path="shop" element={<MiniShop />} />
        <Route path="profile" element={<TailorProfile />} />
        <Route path="notifications" element={<TailorNotifications />} />
    </Route>
);

export default TailorRoutes;
