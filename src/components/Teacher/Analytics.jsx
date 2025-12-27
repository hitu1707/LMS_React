import { useNavigate } from 'react-router-dom'

function TeacherAnalytics() {
  const navigate = useNavigate()
  
  const analytics = {
    totalRevenue: 80000,
    totalViews: 1234,
    totalStudents: 75,
    avgRating: 4.7,
    courses: [
      {
        id: 1,
        title: 'Full Stack Web Development',
        views: 850,
        revenue: 40000,
        students: 45,
        attendance: [
          { student: 'Rajesh', lesson: 'Intro to React', attended: true, date: '2024-01-15' },
          { student: 'Beelzebub', lesson: 'Intro to React', attended: true, date: '2024-01-15' },
          { student: 'Himanshu', lesson: 'Components', attended: false, date: '2024-01-16' },
          { student: 'Rocket', lesson: 'State', attended: true, date: '2024-01-17' },
        ]
      },
      {
        id: 2,
        title: 'Python for Data Science',
        views: 384,
        revenue: 40000,
        students: 30,
        attendance: [
          { student: 'Ichigo', lesson: 'Python Basics', attended: true, date: '2024-01-16' },
          { student: 'Gabimaru', lesson: 'NumPy', attended: true, date: '2024-01-16' },
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate('/teacher/dashboard')}
            className="flex items-center text-white hover:text-indigo-100 font-semibold mb-3"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
          <p className="text-indigo-100 mt-1">Track your course performance and student engagement</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">₹{analytics.totalRevenue}</p>
                <p className="text-green-600 text-xs mt-1">↗ +12% from last month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Views</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.totalViews}</p>
                <p className="text-blue-600 text-xs mt-1">↗ +8% from last week</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Students</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.totalStudents}</p>
                <p className="text-purple-600 text-xs mt-1">↗ +15 new students</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Average Rating</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{analytics.avgRating}</p>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Course Performance */}
        {analytics.courses.map(course => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-1">Course Performance Metrics</p>
              </div>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <p className="text-blue-800 text-sm font-medium mb-2">Total Views</p>
                <p className="text-4xl font-bold text-blue-600">{course.views}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <p className="text-green-800 text-sm font-medium mb-2">Revenue Generated</p>
                <p className="text-4xl font-bold text-green-600">₹{course.revenue}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <p className="text-purple-800 text-sm font-medium mb-2">Enrolled Students</p>
                <p className="text-4xl font-bold text-purple-600">{course.students}</p>
              </div>
            </div>

            {/* Attendance Report */}
            <div className="mt-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Attendance Report
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-200">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-200">
                        Lesson
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-200">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-200">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {course.attendance.map((record, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-sm">
                                {record.student.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-semibold text-gray-900">{record.student}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                          <div className="text-sm text-gray-900">{record.lesson}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                          <div className="text-sm text-gray-900">{record.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                          {record.attended ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              Present
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                              </svg>
                              Absent
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeacherAnalytics