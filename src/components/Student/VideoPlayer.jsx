import { useState, useRef, useEffect } from 'react'
import toast from 'react-hot-toast'

function VideoPlayer({ video }) {
  const [watchedPercentage, setWatchedPercentage] = useState(0)
  const [attendanceMarked, setAttendanceMarked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)
  const intervalRef = useRef(null)

  const extractYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const videoId = extractYouTubeID(video.youtubeUrl)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0`

  useEffect(() => {
    setWatchedPercentage(0)
    setAttendanceMarked(false)
    setIsPlaying(false)
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [video.id])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setWatchedPercentage(prev => {
          const newPercentage = Math.min(prev + 0.5, 100)
          
          if (newPercentage >= 80 && !attendanceMarked) {
            setAttendanceMarked(true)
            toast.success('Attendance marked! Great job! 🎉', {
              icon: '✅',
              duration: 4000,
            })
            console.log('Attendance marked for video:', video.id)
          }
          
          return newPercentage
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, attendanceMarked, video.id])

  const handlePlayClick = () => {
    setIsPlaying(true)
    toast('Tracking your progress...', {
      icon: '📊',
      duration: 2000,
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
      {/* Video Title */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
        <p className="text-purple-100 dark:text-purple-200 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Duration: {video.duration}
        </p>
      </div>

      {/* Video Player */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
        <iframe
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onClick={handlePlayClick}
        ></iframe>
      </div>
      
      {/* Progress Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">Watch Progress: {watchedPercentage.toFixed(0)}%</p>
          {!isPlaying && (
            <button 
              onClick={handlePlayClick}
              className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
              Start Tracking
            </button>
          )}
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${watchedPercentage}%` }}
          ></div>
        </div>
        
        {/* Attendance Badge */}
        {attendanceMarked && (
          <div className="mt-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-4">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <p className="text-green-800 dark:text-green-400 font-bold">Attendance Marked Successfully!</p>
                <p className="text-green-600 dark:text-green-500 text-sm">You've watched enough of this lesson</p>
              </div>
            </div>
          </div>
        )}

        {/* Info Boxes */}
        <div className="mt-6 space-y-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-400 text-sm flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              <span><strong>Note:</strong> Watch at least 80% of the video to mark attendance automatically.</span>
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <p className="text-purple-800 dark:text-purple-400 text-sm flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
              <span>Video quality adjusts automatically based on your internet speed.</span>
            </p>
          </div>
        </div>

        {/* YouTube Link */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <a 
            href={video.youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center justify-center transition"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer