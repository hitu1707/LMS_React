import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ThemeToggle from '../common/ThemeToggle'

function Verify() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleVerify = async (e) => {
    e.preventDefault()
    
    if (!code || code.length !== 6) {
      toast.error('Please enter a valid 6-digit code', {
        icon: '⚠️',
      })
      return
    }

    setIsLoading(true)
    const loadingToast = toast.loading('Verifying your email...')

    setTimeout(() => {
      toast.dismiss(loadingToast)
      
      toast.success('Email verified successfully! ✅', {
        duration: 3000,
        icon: '🎉',
      })

      setIsLoading(false)
      
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }, 1500)
  }

  const handleResendCode = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Sending new code...',
        success: 'Verification code sent! Check your email 📧',
        error: 'Failed to send code',
      }
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md transition-colors duration-300">
        <div className="text-center mb-8">
          <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Verify Email</h2>
          <p className="text-gray-600 dark:text-gray-400">Enter the 6-digit code sent to your email</p>
        </div>
        
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Verification Code</label>
            <input 
              type="text" 
              placeholder="Enter 6-digit code" 
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              maxLength="6"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 dark:bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </>
            ) : (
              'Verify Email'
            )}
          </button>
        </form>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
          Didn't receive code?{' '}
          <button 
            onClick={handleResendCode}
            className="text-green-600 dark:text-green-400 font-semibold hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  )
}

export default Verify