import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Navbar from '../../components/navbar/Navbar';
import MenuPage from '../menu/MenuPage';
import About from '../about/About';
import ContactUs from '../contectus/ContactUs';


export default function Home() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <div>
        <h1>customers no 1</h1>
        <button onClick={handleLogout}>Logout</button>
        <MenuPage />
        <About />
        <ContactUs/>
      </div>
    </div>
  );

}