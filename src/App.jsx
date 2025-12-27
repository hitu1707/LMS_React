import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Import components
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Verify from './components/Auth/Verify'
import StudentDashboard from './components/Student/StudentDashboard'
import CourseView from './components/Student/CourseView'
import TeacherDashboard from './components/Teacher/TeacherDashboard'
import CreateCourse from './components/Teacher/CreateCourse'
import TeacherAnalytics from './components/Teacher/Analytics'
import AdminDashboard from './components/Admin/AdminDashboard'
import UserManagement from './components/Admin/UserManagement'
import CourseManagement from './components/Admin/CourseManagement'
import AttendanceManagement from './components/Admin/AttendanceManagement'
import AdminAnalytics from './components/Admin/AdminAnalytics'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      {/* Toast Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Default options
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: '500',
          },
          // Success toast style
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
            style: {
              background: '#10b981',
              color: '#fff',
            },
          },
          // Error toast style
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
          // Loading toast style
          loading: {
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#fff',
            },
            style: {
              background: '#3b82f6',
              color: '#fff',
            },
          },
        }}
      />

      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard user={user} />} />
        <Route path="/student/course/:id" element={<CourseView />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/create-course" element={<CreateCourse />} />
        <Route path="/teacher/analytics" element={<TeacherAnalytics />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/attendance" element={<AttendanceManagement />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App