import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import AnimatedAvatar from './AnimatedAvatar'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Fixed Avatar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <AnimatedAvatar />
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="lg:col-span-8">
            <div className="min-h-[70vh]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
