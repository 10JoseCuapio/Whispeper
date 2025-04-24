// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Login from './User/Login';
import User from './User/User';
import Chat from './components/Chat';
import Bot from './components/Bot';
import Welcome from './components/Welcome';
import Layouts from './layouts/Layouts';

export default function Rutas() {
  return (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/layouts" element={<Layouts />} />
    </Routes>
  );
}
