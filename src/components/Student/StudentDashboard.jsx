import { useNavigate } from 'react-router-dom'

function StudentDashboard() {
  const navigate = useNavigate()
  
  const enrolledCourses = [
    { 
      id: 1, 
      title: 'Full Stack Web Development', 
      progress: 45, 
      certificate: false, 
      sections: 3,
      totalLessons: 8,
      category: 'fullstack',
      thumbnail: 'https://img.youtube.com/vi/SqcY0GlETPk/mqdefault.jpg'
    },
    { 
      id: 2, 
      title: 'Python for Data Science', 
      progress: 100, 
      certificate: true,
      sections: 4,
      totalLessons: 12,
      category: 'python',
      thumbnail: 'https://img.youtube.com/vi/_uQrJ0TkZlc/mqdefault.jpg'
    },
    { 
      id: 3, 
      title: 'Machine Learning Basics', 
      progress: 20, 
      certificate: false,
      sections: 5,
      totalLessons: 15,
      category: 'ml',
      thumbnail: 'https://img.youtube.com/vi/gmvvaobm7eQ/mqdefault.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Student Dashboard</h2>
          <button 
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Enrolled Courses ({enrolledCourses.length})
          </h3>
          <p className="text-gray-600">Continue learning from where you left off</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map(course => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {course.sections} Sections
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  📚 {course.sections} Sections • 📹 {course.totalLessons} Lessons
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-blue-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Certificate Badge */}
                {course.certificate && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-700 text-sm font-semibold flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Certificate Available
                    </p>
                  </div>
                )}

                {/* Button */}
                <button 
                  onClick={() => navigate(`/student/course/${course.id}`)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-[1.02]"
                >
                  Continue Learning →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard