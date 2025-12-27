import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ThemeToggle from '../common/ThemeToggle'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    
    if (!name || !email || !password) {
      toast.error('Please fill in all fields', {
        icon: '⚠️',
      })
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters', {
        icon: '🔒',
      })
      return
    }

    setIsLoading(true)
    const loadingToast = toast.loading('Creating your account...')

    setTimeout(() => {
      toast.dismiss(loadingToast)
      
      toast.success('Account created successfully! 🎉', {
        icon: '✅',
        duration: 4000,
      })

      setTimeout(() => {
        toast('Verification email sent to ' + email, {
          icon: '📧',
          duration: 5000,
          style: {
            background: '#3b82f6',
            color: '#fff',
          },
        })
      }, 500)

      setIsLoading(false)
      navigate('/verify')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md transition-colors duration-300">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-400">Join our learning platform</p>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              required
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              required
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Create a password (min 6 characters)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              required
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 dark:bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup