import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CourseManagement() {
  const navigate = useNavigate()
  
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      title: 'Full Stack Web Development', 
      teacher: 'Jane Smith', 
      students: 45, 
      status: 'active',
      category: 'Web Development',
      revenue: 40000,
      rating: 4.8,
      sections: 3
    },
    { 
      id: 2, 
      title: 'Python for Data Science', 
      teacher: 'Jane Smith', 
      students: 30, 
      status: 'active',
      category: 'Data Science',
      revenue: 40000,
      rating: 4.7,
      sections: 4
    },
    { 
      id: 3, 
      title: 'Machine Learning Basics', 
      teacher: 'John Teacher', 
      students: 20, 
      status: 'inactive',
      category: 'Machine Learning',
      revenue: 40000,
      rating: 4.5,
      sections: 5
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(c => c.id !== id))
      alert('Course deleted successfully!')
    }
  }

  const handleToggleStatus = (id) => {
    setCourses(courses.map(c => 
      c.id === id ? { ...c, status: c.status === 'active' ? 'inactive' : 'active' } : c
    ))
  }

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalRevenue = courses.reduce((sum, course) => sum + course.revenue, 0)
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center text-white hover:text-purple-100 font-semibold mb-3"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold">Course Management</h2>
          <p className="text-purple-100 mt-1">Oversee and manage all courses on the platform</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Courses</p>
                <p className="text-4xl font-bold mt-2">{courses.length}</p>
              </div>
              <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Active Courses</p>
                <p className="text-4xl font-bold mt-2">
                  {courses.filter(c => c.status === 'active').length}
                </p>
              </div>
              <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Total Students</p>
                <p className="text-4xl font-bold mt-2">{totalStudents}</p>
              </div>
              <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Total Revenue</p>
                <p className="text-4xl font-bold mt-2">₹{totalRevenue}</p>
              </div>
              <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search Courses</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search by course name or teacher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Status</label>
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className={`h-2 ${course.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center mb-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      {course.teacher}
                    </p>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-semibold">
                      {course.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    course.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {course.status.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Students</p>
                    <p className="text-xl font-bold text-blue-600">{course.students}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Revenue</p>
                    <p className="text-xl font-bold text-green-600">₹{course.revenue}</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Rating</p>
                    <p className="text-xl font-bold text-yellow-600">{course.rating}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    {course.sections} Sections
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => alert(`Editing course ${course.id}`)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center font-semibold"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    Edit
                  </button>
                  <button 
                    onClick={() => handleToggleStatus(course.id)}
                    className={`flex-1 ${course.status === 'active' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'} text-white py-2 px-4 rounded-lg transition flex items-center justify-center font-semibold`}
                  >
                    {course.status === 'active' ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                        </svg>
                        Deactivate
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Activate
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseManagement