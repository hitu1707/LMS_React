import { useNavigate } from 'react-router-dom'

function AdminAnalytics() {
  const navigate = useNavigate()
  
  const analytics = {
    totalViews: 5420,
    totalRevenue: 20000,
    avgCompletionRate: 68,
    avgEngagement: 75,
    courseStats: [
      { course: 'Full Stack Web Development', views: 2100, revenue: 10000, completion: 72, engagement: 80, students: 45 },
      { course: 'Python for Data Science', views: 1850, revenue: 10000, completion: 65, engagement: 75, students: 30 },
      { course: 'Machine Learning Basics', views: 1470, revenue: 10000, completion: 60, engagement: 70, students: 20 },
    ],
    monthlyRevenue: [
      { month: 'January', revenue: 5000, students: 35, courses: 12 },
      { month: 'February', revenue: 5500, students: 42, courses: 15 },
      { month: 'March', revenue: 5200, students: 48, courses: 18 },
    ],
    topTeachers: [
      { name: 'Ravi', courses: 2, students: 75, revenue: 6900, rating: 4.8 },
      { name: 'Rekha', courses: 1, students: 20, revenue: 7800, rating: 4.5 },
    ],
    recentEnrollments: [
      { student: 'Shreya', course: 'Full Stack Web Development', date: '2025-01-20', amount: 40000 },
      { student: 'Shruti', course: 'Python for Data Science', date: '2025-08-21', amount: 40000 },
      { student: 'Alex', course: 'Machine Learning Basics', date: '2025-04-22', amount: 40000 },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center text-white hover:text-orange-100 font-semibold mb-3"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold">Analytics & Reporting</h2>
          <p className="text-orange-100 mt-1">Complete platform insights and performance metrics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Total Views</p>
                <p className="text-4xl font-bold">{analytics.totalViews.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-blue-100 text-xs">+12% this month</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium mb-1">Total Revenue</p>
                <p className="text-4xl font-bold">₹{analytics.totalRevenue.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-green-100 text-xs">+18% this month</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium mb-1">Avg Completion</p>
                <p className="text-4xl font-bold">{analytics.avgCompletionRate}%</p>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-3">
                  <div className="bg-white h-2 rounded-full" style={{ width: `${analytics.avgCompletionRate}%` }}></div>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium mb-1">Avg Engagement</p>
                <p className="text-4xl font-bold">{analytics.avgEngagement}%</p>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-3">
                  <div className="bg-white h-2 rounded-full" style={{ width: `${analytics.avgEngagement}%` }}></div>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Course Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Course Performance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Course</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Views</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Revenue</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Completion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {analytics.courseStats.map((stat, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-4 text-sm font-semibold text-gray-900">{stat.course}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                          <span className="text-sm text-gray-900">{stat.views}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                          ₹{stat.revenue}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${stat.completion}%` }}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{stat.completion}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Monthly Revenue Trend
            </h3>
            <div className="space-y-4">
              {analytics.monthlyRevenue.map((month, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-800">{month.month}</span>
                    <span className="text-2xl font-bold text-green-600">₹{month.revenue}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      <span className="text-gray-600">{month.students} Students</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      <span className="text-gray-600">{month.courses} Courses</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(month.revenue / 6000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Teachers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              Top Performing Teachers
            </h3>
            <div className="space-y-4">
              {analytics.topTeachers.map((teacher, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{teacher.name}</p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill={i < Math.floor(teacher.rating) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                          ))}
                          <span className="text-gray-600 text-sm ml-1">{teacher.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-green-600">₹{teacher.revenue}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded p-2 text-center">
                      <p className="text-gray-600 text-xs">Courses</p>
                      <p className="font-bold text-purple-600">{teacher.courses}</p>
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      <p className="text-gray-600 text-xs">Students</p>
                      <p className="font-bold text-blue-600">{teacher.students}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Enrollments */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Recent Enrollments
            </h3>
            <div className="space-y-3">
              {analytics.recentEnrollments.map((enrollment, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {enrollment.student.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{enrollment.student}</p>
                        <p className="text-xs text-gray-600">{enrollment.course}</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                      ₹{enrollment.amount}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {enrollment.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 mt-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Export Analytics Report</h3>
              <p className="text-indigo-100">Download comprehensive reports in various formats</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                PDF
              </button>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition shadow-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Excel
              </button>
              <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition shadow-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAnalytics