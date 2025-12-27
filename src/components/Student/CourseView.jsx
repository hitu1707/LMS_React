import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

function CourseView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentVideo, setCurrentVideo] = useState(null)
  const [expandedSections, setExpandedSections] = useState([])
  
  const getCourseData = (courseId) => {
    const courses = {
      '1': {
        id: 1,
        title: 'Full Stack Web Development',
        syllabus: '/path/to/fullstack-syllabus.pdf',
        meetingLink: 'https://zoom.us/j/123456789',
        sections: [
          {
            id: 1,
            title: 'React Basics',
            lessons: [
              { id: 101, title: ' One Shot React  Tutorial for Beginners', youtubeUrl: 'https://youtu.be/RGKi6LSPDLU?si=4wQnnR8vCrWPg5d2', duration: '2 hour 12 minutes' },
              { id: 102, title: 'React Components Tutorial', youtubeUrl: 'https://youtu.be/BSaYsHVpaK0?si=ftBGuia_coYZ8nO1', duration: '43 minutes' },
              { id: 103, title: 'React Hooks Explained', youtubeUrl: 'https://youtu.be/Lt4vy8hfc-s?si=jC7bVelLLZ9DBNtN', duration: '38 minutes' },
            ]
          },
          {
            id: 2,
            title: 'Node.js Advanced',
            lessons: [
              { id: 201, title: 'Node.js Tutorial for Beginners', youtubeUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4', duration: '1 hour 14 minutes' },
              { id: 202, title: 'Express.js Crash Course', youtubeUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE', duration: '53 minutes' },
              { id: 203, title: 'Building REST APIs with Node', youtubeUrl: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', duration: '1 hour 2 minutes' },
            ]
          },
          {
            id: 3,
            title: 'MongoDB Tutorial',
            lessons: [
              { id: 301, title: 'MongoDB Crash Course', youtubeUrl: 'https://www.youtube.com/watch?v=-56x56UppqQ', duration: '30 minutes' },
              { id: 302, title: 'MongoDB with Node.js', youtubeUrl: 'https://www.youtube.com/watch?v=bhiEJW5poHU', duration: '45 minutes' },
            ]
          }
        ]
      },
      '2': {
        id: 2,
        title: 'Python for Data Science',
        syllabus: '/path/to/python-syllabus.pdf',
        meetingLink: 'https://zoom.us/j/987654321',
        sections: [
          {
            id: 1,
            title: 'Python Fundamentals',
            lessons: [
              { id: 101, title: 'Python Tutorial for Beginners', youtubeUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', duration: '6 hours 14 minutes' },
              { id: 102, title: 'Python Data Types', youtubeUrl: 'https://www.youtube.com/watch?v=gCCVsvgR2KU', duration: '42 minutes' },
              { id: 103, title: 'Python Functions Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=89cGQjB5R4M', duration: '35 minutes' },
            ]
          },
          {
            id: 2,
            title: 'NumPy & Pandas',
            lessons: [
              { id: 201, title: 'NumPy Tutorial for Beginners', youtubeUrl: 'https://www.youtube.com/watch?v=QUT1VHiLmmI', duration: '58 minutes' },
              { id: 202, title: 'Pandas Complete Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=vmEHCJofslg', duration: '1 hour 35 minutes' },
              { id: 203, title: 'Data Manipulation with Pandas', youtubeUrl: 'https://www.youtube.com/watch?v=ZyhVh-qRZPA', duration: '4 hours 31 minutes' },
            ]
          },
          {
            id: 3,
            title: 'Data Visualization',
            lessons: [
              { id: 301, title: 'Matplotlib Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=3Xc3CA655Y4', duration: '1 hour 21 minutes' },
              { id: 302, title: 'Seaborn Tutorial for Beginners', youtubeUrl: 'https://www.youtube.com/watch?v=6GUZXDef2U0', duration: '1 hour 30 minutes' },
            ]
          },
          {
            id: 4,
            title: 'Data Analysis Projects',
            lessons: [
              { id: 401, title: 'Python Data Analysis Project', youtubeUrl: 'https://www.youtube.com/watch?v=r-uOLxNrNk8', duration: '2 hours 17 minutes' },
              { id: 402, title: 'Real World Data Science Project', youtubeUrl: 'https://www.youtube.com/watch?v=8ext9G7xspg', duration: '3 hours 12 minutes' },
            ]
          }
        ]
      },
      '3': {
        id: 3,
        title: 'Machine Learning Basics',
        syllabus: '/path/to/ml-syllabus.pdf',
        meetingLink: 'https://zoom.us/j/555666777',
        sections: [
          {
            id: 1,
            title: 'Introduction to Machine Learning',
            lessons: [
              { id: 101, title: 'Machine Learning Tutorial for Beginners', youtubeUrl: 'https://www.youtube.com/watch?v=gmvvaobm7eQ', duration: '2 hours 30 minutes' },
              { id: 102, title: 'What is Machine Learning?', youtubeUrl: 'https://www.youtube.com/watch?v=ukzFI9rgwfU', duration: '9 minutes' },
              { id: 103, title: 'Types of Machine Learning', youtubeUrl: 'https://www.youtube.com/watch?v=81ymPYEtFOw', duration: '15 minutes' },
            ]
          },
          {
            id: 2,
            title: 'Supervised Learning',
            lessons: [
              { id: 201, title: 'Linear Regression Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=1-OGRohmH2s', duration: '44 minutes' },
              { id: 202, title: 'Logistic Regression Explained', youtubeUrl: 'https://www.youtube.com/watch?v=yIYKR4sgzI8', duration: '9 minutes' },
              { id: 203, title: 'Decision Trees in Machine Learning', youtubeUrl: 'https://www.youtube.com/watch?v=_L39rN6gz7Y', duration: '17 minutes' },
            ]
          },
          {
            id: 3,
            title: 'Unsupervised Learning',
            lessons: [
              { id: 301, title: 'K-Means Clustering Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=4b5d3muPQmA', duration: '10 minutes' },
              { id: 302, title: 'Principal Component Analysis (PCA)', youtubeUrl: 'https://www.youtube.com/watch?v=FgakZw6K1QQ', duration: '20 minutes' },
            ]
          },
          {
            id: 4,
            title: 'Neural Networks & Deep Learning',
            lessons: [
              { id: 401, title: 'Neural Networks Explained', youtubeUrl: 'https://www.youtube.com/watch?v=aircAruvnKk', duration: '19 minutes' },
              { id: 402, title: 'Deep Learning Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=VyWAvY2CF9c', duration: '15 minutes' },
            ]
          },
          {
            id: 5,
            title: 'ML Projects',
            lessons: [
              { id: 501, title: 'Build a Machine Learning Project', youtubeUrl: 'https://www.youtube.com/watch?v=fiz1ORTBGpY', duration: '1 hour 47 minutes' },
              { id: 502, title: 'End to End ML Project Tutorial', youtubeUrl: 'https://www.youtube.com/watch?v=S_F_c9e2bz4', duration: '2 hours 35 minutes' },
            ]
          }
        ]
      }
    }
    return courses[courseId] || courses['1']
  }

  const course = getCourseData(id)

  useEffect(() => {
    setCurrentVideo(null)
    setExpandedSections([])
  }, [id])

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const totalLessons = course.sections.reduce((sum, section) => sum + section.lessons.length, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/student/dashboard')}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-3"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold text-gray-800">{course.title}</h2>
          <p className="text-gray-600 mt-2">
            {course.sections.length} Sections • {totalLessons} Lessons
          </p>
        </div>
      </div>

      {/* Course Resources */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Course Resources</h3>
          <div className="flex flex-wrap gap-4">
            <a 
              href={course.syllabus} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
            >
              <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
              </svg>
              Download Syllabus
            </a>
            <a 
              href={course.meetingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
            >
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Join Live Class
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Lessons */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-4 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Course Content</h3>
              
              {course.sections.map((section, sectionIndex) => (
                <div key={section.id} className="mb-3">
                  {/* Section Header */}
                  <button 
                    onClick={() => toggleSection(section.id)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg flex justify-between items-center hover:from-blue-600 hover:to-blue-700 transition"
                  >
                    <div className="text-left">
                      <p className="font-semibold text-sm">Section {sectionIndex + 1}: {section.title}</p>
                      <p className="text-xs opacity-90">{section.lessons.length} lessons</p>
                    </div>
                    <svg 
                      className={`w-5 h-5 transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {/* Lessons */}
                  {expandedSections.includes(section.id) && (
                    <div className="mt-2 ml-2 space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <button 
                          key={lesson.id}
                          onClick={() => setCurrentVideo(lesson)}
                          className={`w-full text-left p-3 rounded-lg border-l-4 transition ${
                            currentVideo?.id === lesson.id 
                              ? 'bg-green-50 border-green-500' 
                              : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              currentVideo?.id === lesson.id 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-300 text-gray-700'
                            }`}>
                              {lessonIndex + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">{lesson.title}</p>
                              <p className="text-xs text-gray-600 mt-1">⏱️ {lesson.duration}</p>
                            </div>
                            {currentVideo?.id === lesson.id && (
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                              </svg>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-2">
            {currentVideo ? (
              <VideoPlayer video={currentVideo} />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Select a lesson to start learning</h3>
                <p className="text-gray-600 mb-4">Choose any video from the course content on the left</p>
                <p className="text-sm text-gray-500">💡 Click on section headers to expand/collapse lessons</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseView