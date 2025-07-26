import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import AuthPage from "./pages/Auth";
import EventsPage from "./pages/Events";
import BookingsPage from "./pages/Bookings";
import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Navigate replace to="/auth" />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
