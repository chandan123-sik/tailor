import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CustomerLayout from '../layouts/CustomerLayout';
import CustomerHome from '../pages/Home/CustomerHome';
import Store from '../pages/Store/Store';
import Profile from '../pages/Profile/Profile';
import Orders from '../pages/Orders/Orders';

const CustomerRoutes = (
    <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<Navigate to="services" replace />} />
        <Route path="services" element={<CustomerHome />} />
        <Route path="store" element={<Store />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
    </Route>
);

export default CustomerRoutes;
