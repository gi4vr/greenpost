import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">🌿 Greenpost</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Home</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
