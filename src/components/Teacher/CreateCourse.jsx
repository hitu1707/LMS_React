import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateCourse() {
  const navigate = useNavigate()
  const [courseTitle, setCourseTitle] = useState('')
  const [syllabus, setSyllabus] = useState(null)
  const [meetingLink, setMeetingLink] = useState('')
  const [sections, setSections] = useState([])
  
  const [currentSection, setCurrentSection] = useState({
    title: '',
    lessons: []
  })
  
  const [newLesson, setNewLesson] = useState({ 
    title: '', 
    youtubeUrl: '',
    duration: '' 
  })

  const extractYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const isValidYouTubeUrl = (url) => {
    return extractYouTubeID(url) !== null
  }

  const handleAddLesson = () => {
    if (!newLesson.title) {
      alert('Please enter lesson title')
      return
    }
    
    if (!newLesson.youtubeUrl) {
      alert('Please enter YouTube URL')
      return
    }

    if (!isValidYouTubeUrl(newLesson.youtubeUrl)) {
      alert('Please enter a valid YouTube URL')
      return
    }

    setCurrentSection({
      ...currentSection,
      lessons: [...currentSection.lessons, { ...newLesson, id: Date.now() }]
    })
    setNewLesson({ title: '', youtubeUrl: '', duration: '' })
  }

  const handleDeleteLesson = (lessonId) => {
    setCurrentSection({
      ...currentSection,
      lessons: currentSection.lessons.filter(lesson => lesson.id !== lessonId)
    })
  }

  const handleAddSection = () => {
    if (!currentSection.title) {
      alert('Please enter section title')
      return
    }

    if (currentSection.lessons.length === 0) {
      alert('Please add at least one lesson to this section')
      return
    }

    setSections([...sections, { ...currentSection, id: Date.now() }])
    setCurrentSection({ title: '', lessons: [] })
  }

  const handleDeleteSection = (sectionId) => {
    if (window.confirm('Delete this entire section?')) {
      setSections(sections.filter(section => section.id !== sectionId))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!courseTitle || !syllabus) {
      alert('Please fill course title and upload syllabus')
      return
    }

    if (sections.length === 0) {
      alert('Please add at least one section with lessons')
      return
    }
    
    console.log('Course Data:', {
      title: courseTitle,
      syllabus: syllabus.name,
      meetingLink,
      sections
    })
    
    alert('Course created successfully!')
    navigate('/teacher/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/teacher/dashboard')}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold text-gray-800">Create New Course</h2>
          <p className="text-gray-600 mt-2">Fill in the details to create your course</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Course Info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
              Course Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Title *
                </label>
                <input 
                  type="text" 
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="e.g., Full Stack Development"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Syllabus (PDF/Doc) *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setSyllabus(e.target.files[0])}
                    className="hidden"
                    id="syllabus-upload"
                    required
                  />
                  <label htmlFor="syllabus-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="text-gray-600 font-semibold">Click to upload syllabus</p>
                    <p className="text-gray-400 text-sm mt-1">PDF or DOC (Max 10MB)</p>
                  </label>
                </div>
                {syllabus && (
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {syllabus.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Live Meeting Link (Optional)
                </label>
                <input 
                  type="url" 
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                  placeholder="https://zoom.us/j/..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <p className="text-gray-500 text-xs mt-1">Zoom, Google Meet, or any video conferencing link</p>
              </div>
            </div>
          </div>

          {/* Add Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 border-2 border-dashed border-blue-300">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
              Add New Section
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Create sections like "React Basics", "Node.js", "MongoDB" etc., and add YouTube video lessons
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Section Title *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., React Basics, Node.js Advanced, MongoDB Tutorial"
                  value={currentSection.title}
                  onChange={(e) => setCurrentSection({ ...currentSection, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white"
                />
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-gray-800 mb-4">
                  Add Lessons to "{currentSection.title || 'this section'}"
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lesson Title *</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Introduction to React Hooks"
                      value={newLesson.title}
                      onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL *</label>
                    <input 
                      type="url" 
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={newLesson.youtubeUrl}
                      onChange={(e) => setNewLesson({ ...newLesson, youtubeUrl: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                    <p className="text-gray-500 text-xs mt-1">Paste YouTube video link here</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g., 15 minutes"
                      value={newLesson.duration}
                      onChange={(e) => setNewLesson({ ...newLesson, duration: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={handleAddLesson}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Add Lesson to Section
                  </button>
                </div>
              </div>

              {/* Lessons in current section */}
              {currentSection.lessons.length > 0 && (
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h5 className="font-bold text-gray-800 mb-4">
                    Lessons in this section ({currentSection.lessons.length})
                  </h5>
                  <div className="space-y-3">
                    {currentSection.lessons.map((lesson, index) => (
                      <div key={lesson.id} className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800">{lesson.title}</p>
                          <p className="text-sm text-gray-600 truncate mt-1">📺 {lesson.youtubeUrl}</p>
                          {lesson.duration && (
                            <p className="text-sm text-gray-600 mt-1">⏱️ {lesson.duration}</p>
                          )}
                          <img 
                            src={`https://img.youtube.com/vi/${extractYouTubeID(lesson.youtubeUrl)}/mqdefault.jpg`}
                            alt="Thumbnail"
                            className="w-32 h-18 object-cover rounded mt-2"
                          />
                        </div>
                        <button 
                          type="button" 
                          onClick={() => handleDeleteLesson(lesson.id)}
                          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button 
                type="button" 
                onClick={handleAddSection}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Save Section "{currentSection.title || '...'}"
              </button>
            </div>
          </div>

          {/* Display all added sections */}
          {sections.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">✓</span>
                Course Sections ({sections.length})
              </h3>
              
              <div className="space-y-4">
                {sections.map((section, sectionIndex) => (
                  <div key={section.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border border-blue-200">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          📚 Section {sectionIndex + 1}: {section.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{section.lessons.length} lessons</p>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => handleDeleteSection(section.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold"
                      >
                        Delete Section
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lesson.id} className="bg-white p-3 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-gray-800 text-sm">
                            {lessonIndex + 1}. {lesson.title}
                          </p>
                          <p className="text-xs text-gray-600 truncate mt-1">
                            📺 {lesson.youtubeUrl}
                            {lesson.duration && ` • ⏱️ ${lesson.duration}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-white border-t-2 border-gray-200 p-6 rounded-xl shadow-xl">
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:from-green-700 hover:to-blue-700 transition transform hover:scale-[1.02] shadow-lg"
            >
              🚀 Create Course with {sections.length} Section(s)
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCourse