import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserManagement() {
  const navigate = useNavigate()
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Ichigo', email: 'Ichigo@example.com', role: 'student', status: 'active', joined: '2024-01-10' },
    { id: 2, name: 'David', email: 'David@example.com', role: 'teacher', status: 'active', joined: '2024-01-08' },
    { id: 3, name: 'Himash', email: 'Himash@example.com', role: 'admin', status: 'active', joined: '2024-01-01' },
    { id: 4, name: 'Palak', email: 'palak@example.com', role: 'student', status: 'inactive', joined: '2024-01-15' },
  ])

  const [editingUser, setEditingUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const handleEdit = (user) => {
    setEditingUser({ ...user })
  }

  const handleSave = () => {
    setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
    setEditingUser(null)
    alert('User updated successfully!')
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id))
      alert('User deleted successfully!')
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === 'all' || user.role === filterRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center text-white hover:text-blue-100 font-semibold mb-3"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold">User Management</h2>
          <p className="text-blue-100 mt-1">Manage all platform users - students, teachers, and admins</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <p className="text-gray-500 text-sm font-medium">Total Users</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{users.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <p className="text-gray-500 text-sm font-medium">Students</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {users.filter(u => u.role === 'student').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <p className="text-gray-500 text-sm font-medium">Teachers</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {users.filter(u => u.role === 'teacher').length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-pink-500">
            <p className="text-gray-500 text-sm font-medium">Admins</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {users.filter(u => u.role === 'admin').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search Users</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Role</label>
              <select 
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="student">Students</option>
                <option value="teacher">Teachers</option>
                <option value="admin">Admins</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingUser?.id === user.id ? (
                        <input 
                          value={editingUser.name}
                          onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingUser?.id === user.id ? (
                        <input 
                          value={editingUser.email}
                          onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <div className="text-sm text-gray-900">{user.email}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingUser?.id === user.id ? (
                        <select 
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                          <option value="admin">Admin</option>
                        </select>
                      ) : (
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          user.role === 'student' ? 'bg-blue-100 text-blue-800' :
                          user.role === 'teacher' ? 'bg-purple-100 text-purple-800' :
                          'bg-pink-100 text-pink-800'
                        }`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.joined}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {editingUser?.id === user.id ? (
                        <div className="flex gap-2">
                          <button 
                            onClick={handleSave}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Save
                          </button>
                          <button 
                            onClick={() => setEditingUser(null)}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEdit(user)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement