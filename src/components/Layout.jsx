import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import AnimatedAvatar from './AnimatedAvatar'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Fixed Avatar on Desktop, Top on Mobile */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <AnimatedAvatar />
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="lg:col-span-8">
            <div className="min-h-[50vh] lg:min-h-[70vh]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
