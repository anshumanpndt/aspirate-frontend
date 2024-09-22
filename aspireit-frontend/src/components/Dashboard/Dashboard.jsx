// src/components/Dashboard/Dashboard.jsx
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import EnrollmentChart from './Charts/EnrollmentChart';
import AttendanceChart from './Charts/AttendenceChart';
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';
import { motion } from 'framer-motion';
import API from '../../services/api'

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [children, setChildren] = useState([]);
  const [finances, setFinances] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [theme, setTheme] = useState('light');

  const fetchData = async () => {
    try {
      const [childrenRes, financesRes, enrollmentsRes, attendanceRes] = await Promise.all([
        API.get('/children'),
        API.get('/finances'),
        API.get('/predictions/enrollments'),
        API.get('/attendance'), // Assuming you have this endpoint
      ]);
      // ... rest remains the same
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh data every minute
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div className="flex h-screen">
      <Sidebar logout={logout} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Enrollment Predictions</h2>
              <EnrollmentChart data={enrollments} />
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Attendance Trends</h2>
              <AttendanceChart data={attendance} />
            </div>
          </motion.div>

          {/* Additional Dashboard Components */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Children Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold">Total Children</h3>
                <p className="text-3xl">{children.length}</p>
              </div>
              {/* Add more overview cards as needed */}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
