import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  
  const stats = {
    totalUsers: 150,
    totalStudents: 120,
    totalTeachers: 25,
    totalAdmins: 5,
    totalCourses: 45,
    totalRevenue: 80000,
    activeCourses: 40,
    pendingTickets: 8
  }

  const recentActivities = [
    { id: 1, type: 'user', message: 'New student registration: Ichigo', time: '5 mins ago', icon: 'user-add' },
    { id: 2, type: 'course', message: 'New course created: React Advanced', time: '15 mins ago', icon: 'book' },
    { id: 3, type: 'revenue', message: 'Payment received: ₹40000', time: '1 hour ago', icon: 'money' },
    { id: 4, type: 'ticket', message: 'New support ticket #28752', time: '2 hours ago', icon: 'support' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Admin Dashboard</h2>
              <p className="text-indigo-100 mt-1">Complete platform overview and management</p>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Users</p>
                <p className="text-4xl font-bold mt-2">{stats.totalUsers}</p>
                <p className="text-blue-100 text-xs mt-2">↗ +12 this week</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Active Courses</p>
                <p className="text-4xl font-bold mt-2">{stats.activeCourses}</p>
                <p className="text-green-100 text-xs mt-2">of {stats.totalCourses} total</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm font-medium">Total Revenue</p>
                <p className="text-4xl font-bold mt-2">₹{stats.totalRevenue}</p>
                <p className="text-yellow-100 text-xs mt-2">↗ +18% this month</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Support Tickets</p>
                <p className="text-4xl font-bold mt-2">{stats.pendingTickets}</p>
                <p className="text-purple-100 text-xs mt-2">Pending resolution</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* User Distribution */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">User Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-800 text-sm font-semibold">Students</p>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalStudents}</p>
                  <div className="mt-3 bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(stats.totalStudents/stats.totalUsers)*100}%` }}></div>
                  </div>
                </div>
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-800 text-sm font-semibold">Teachers</p>
                  <p className="text-3xl font-bold text-purple-600 mt-2">{stats.totalTeachers}</p>
                  <div className="mt-3 bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(stats.totalTeachers/stats.totalUsers)*100}%` }}></div>
                  </div>
                </div>
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-l-4 border-pink-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-800 text-sm font-semibold">Admins</p>
                  <p className="text-3xl font-bold text-pink-600 mt-2">{stats.totalAdmins}</p>
                  <div className="mt-3 bg-pink-200 rounded-full h-2">
                    <div className="bg-pink-600 h-2 rounded-full" style={{ width: `${(stats.totalAdmins/stats.totalUsers)*100}%` }}></div>
                  </div>
                </div>
                <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/admin/users')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition shadow-md flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <span className="font-semibold">User Management</span>
                </div>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <button 
                onClick={() => navigate('/admin/courses')}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition shadow-md flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  <span className="font-semibold">Course Management</span>
                </div>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <button 
                onClick={() => navigate('/admin/attendance')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <span className="font-semibold">Attendance Management</span>
                </div>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <button 
                onClick={() => navigate('/admin/analytics')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition shadow-md flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <span className="font-semibold">Analytics & Reporting</span>
                </div>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <button 
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition shadow-md flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  <span className="font-semibold">Support & Tickets</span>
                  <span className="ml-2 bg-white text-pink-600 px-2 py-1 rounded-full text-xs font-bold">
                    {stats.pendingTickets}
                  </span>
                </div>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'user' ? 'bg-blue-100' :
                    activity.type === 'course' ? 'bg-purple-100' :
                    activity.type === 'revenue' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    {activity.type === 'user' && (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    )}
                    {activity.type === 'course' && (
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    )}
                    {activity.type === 'revenue' && (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    {activity.type === 'ticket' && (
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-semibold text-gray-800">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard